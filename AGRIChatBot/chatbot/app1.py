from flask import Flask, request, jsonify, render_template, send_file
import google.generativeai as genai
from googletrans import Translator
import speech_recognition as sr
import pyttsx3
import tempfile
import os
from pydub import AudioSegment  # <-- Add this import

app = Flask(__name__)

# Configure Gemini API Key
genai.configure(api_key="AIzaSyAYpe46XHYgCJMjrAxXh4St1L8R-3n7KAU") 

# Initialize Google Gemini Model
model = genai.GenerativeModel('gemini-1.5-flash')

# Initialize Google Translator
translator = Translator()

# Initialize Text-to-Speech Engine
tts_engine = pyttsx3.init()

# List of agriculture-related keywords
agriculture_keywords = [
    # ...existing code...
    # (keywords list unchanged)
]

@app.route('/')
def index():
    return render_template('index.html')

def detect_language(text):
    detection = translator.detect(text)
    detected_lang = detection.lang
    return detected_lang

def get_answer_google_ai(question):
    if any(word in question.lower() for word in agriculture_keywords):
        response = model.generate_content(question)
        formatted_response = format_response(response.text)
        return formatted_response
    else:
        return "🚫 I am designed to answer **Agriculture-related questions only.** 🌱"

def format_response(response_text):
    lines = response_text.split('\n')
    formatted_text = ""
    for line in lines:
        line = line.strip()
        if not line:
            continue
        if "farming" in line.lower():
            formatted_text += f'🚜 **Farming:** {line}\n\n'
        elif "soil" in line.lower():
            formatted_text += f'🪴 **Soil:** {line}\n\n'
        elif "fertilizer" in line.lower():
            formatted_text += f'💊 **Fertilizer:** {line}\n\n'
        elif "pesticide" in line.lower():
            formatted_text += f'🦟 **Pesticide:** {line}\n\n'
        elif "weather" in line.lower():
            formatted_text += f'⛅ **Weather:** {line}\n\n'
        elif "disease" in line.lower():
            formatted_text += f'🦠 **Plant Disease:** {line}\n\n'
        else:
            formatted_text += f'👉 {line}\n\n'
    return formatted_text

@app.route("/chat", methods=["POST"])
def chat():
    text = request.form.get("text")
    if not text:
        return jsonify({"text": "❌ Invalid request."})

    detected_lang = detect_language(text)
    if detected_lang != 'en':
        translated_text = translator.translate(text, src=detected_lang, dest='en').text
    else:
        translated_text = text

    ai_response = get_answer_google_ai(translated_text)

    if detected_lang != 'en':
        final_response = translator.translate(ai_response, src='en', dest=detected_lang).text
    else:
        final_response = ai_response

    return jsonify({"text": final_response})

@app.route("/voice", methods=["POST"])
def voice():
    if "audio" not in request.files:
        return jsonify({"error": "No audio file provided."}), 400

    audio_file = request.files["audio"]
    with tempfile.NamedTemporaryFile(delete=False, suffix=".webm") as temp_audio:
        audio_file.save(temp_audio.name)
        # Convert WebM/Opus to WAV using pydub
        wav_path = temp_audio.name + ".wav"
        try:
            sound = AudioSegment.from_file(temp_audio.name)
            sound.export(wav_path, format="wav")
        except Exception as e:
            os.remove(temp_audio.name)
            return jsonify({"error": "Audio conversion failed: " + str(e)}), 400

        recognizer = sr.Recognizer()
        with sr.AudioFile(wav_path) as source:
            audio_data = recognizer.record(source)
            try:
                text = recognizer.recognize_google(audio_data)
            except sr.UnknownValueError:
                os.remove(temp_audio.name)
                os.remove(wav_path)
                return jsonify({"error": "Could not understand audio."}), 400
            except sr.RequestError:
                os.remove(temp_audio.name)
                os.remove(wav_path)
                return jsonify({"error": "Speech recognition service error."}), 500
        os.remove(temp_audio.name)
        os.remove(wav_path)

    detected_lang = detect_language(text)
    if detected_lang != 'en':
        translated_text = translator.translate(text, src=detected_lang, dest='en').text
    else:
        translated_text = text

    ai_response = get_answer_google_ai(translated_text)

    if detected_lang != 'en':
        final_response = translator.translate(ai_response, src='en', dest=detected_lang).text
    else:
        final_response = ai_response

    # Text-to-Speech: Save response as audio file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".mp3") as temp_tts:
        tts_engine.save_to_file(final_response, temp_tts.name)
        tts_engine.runAndWait()
        audio_path = temp_tts.name

    return jsonify({"text": final_response, "audio_url": f"/get_audio/{os.path.basename(audio_path)}"})

@app.route("/get_audio/<filename>")
def get_audio(filename):
    audio_path = os.path.join(tempfile.gettempdir(), filename)
    return send_file(audio_path, mimetype="audio/mpeg")

if __name__ == "__main__":
    app.run(debug=True)