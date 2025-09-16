    import React, { useState } from "react";

    function DiseaseDetectionPage() {
    const [preview, setPreview] = useState(null);

    return (
        // <div style={{ background: "#e1d0d05d", minHeight: "90vh", padding: "40px 0" }}>
        <div style={{ background: "linear-gradient(120deg, #d8f9f05f 65%, #e0f5d2ff 100%)", minHeight: "90vh", padding: "40px 0" }}>
        <h1 style={{
            fontWeight: 700,
            margin: "0 0 1.5rem 5vw",
            display: "flex",
            alignItems: "center",
            fontSize: "2rem"
        }}>
            <span role="img" aria-label="stethoscope" style={{ fontSize: "2.2rem", marginRight: 12 }}>🩺</span>
            Crop Disease Detector
        </h1>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 32,
            marginTop: 24
        }}>
            <div style={{
            background: "#fff",
            borderRadius: 18,
            padding: "30px 2vw",
            boxShadow: "0 4px 24px #0001",
            flex: "1 1 300px",
            maxWidth: 440,
            minWidth: 280
            }}>
            <h2>Upload Plant Image</h2>
            <p style={{ color: "#555", marginBottom: 14, marginTop: 0 }}>Upload an image to detect plant diseases</p>
            <label style={{
                border: "2px dashed #c4c4c4",
                borderRadius: 14,
                height: 130,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                cursor: "pointer",
                background: "#fafafc",
                marginBottom: 18
            }}>
                <span style={{ fontSize: 32, color: "#1e87f0" }}>⬆️</span>
                <span style={{ color: "#888", fontSize: 15 }}>Click or drag an image to upload</span>
                <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={e => {
                    if (e.target.files.length > 0) {
                    setPreview(URL.createObjectURL(e.target.files[0]));
                    } else {
                    setPreview(null);
                    }
                }}
                />
            </label>
            {preview && (
                <img
                src={preview}
                alt="Preview"
                style={{
                    marginTop: 18,
                    width: 140,
                    borderRadius: 8,
                    border: "1px solid #eee"
                }}
                />
            )}
            <button
                type="button"
                style={{
                marginTop: 8,
                width: "100%",
                padding: "10px 0",
                background: "#111",
                color: "#fff",
                border: 0,
                borderRadius: 7,
                fontSize: 16,
                cursor: "pointer",
                opacity: 0.9
                }}
                disabled
            >
                Detect Disease
            </button>
            </div>

            <div style={{
            background: "#fff",
            borderRadius: 18,
            padding: "30px 2vw",
            boxShadow: "0 4px 24px #0001",
            flex: "1 1 300px",
            maxWidth: 440,
            minWidth: 280
            }}>
            <h2>Detection Results</h2>
            <p>Upload an image to see results.</p>
            </div>
        </div>
        </div>
    );
    }

    export default DiseaseDetectionPage;
