import React, { useState } from "react";
import "./CommunityPage.css";

function CommunityPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Ravi (Palakkad)",
      avatar: "R",
      content: "My brinjal crop is showing leaf curl. Any suggestions?",
      image: "",
      replies: ["Check for whitefly, spray neem oil if infestation is high."],
      likes: 5,
      newReply: "",
    },
    {
      id: 2,
      user: "Anita (Thrissur)",
      avatar: "A",
      content: "Sharing my paddy growth this season 🌾",
      image: "https://i.imgur.com/example.jpg",
      replies: [],
      likes: 12,
      newReply: "",
    },
  ]);

  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);

  // --- HANDLER FUNCTIONS ---

  const handleReplyChange = (postId, text) => {
    setPosts(
      posts.map((p) => (p.id === postId ? { ...p, newReply: text } : p))
    );
  };

  const handleAddReply = (postId) => {
    const post = posts.find((p) => p.id === postId);
    if (!post || !post.newReply.trim()) return;
    setPosts(
      posts.map((p) =>
        p.id === postId
          ? { ...p, replies: [...p.replies, post.newReply], newReply: "" }
          : p
      )
    );
  };

  const handleVoiceInput = (setTextCallback) => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Sorry, your browser does not support voice recognition.");
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.onresult = (event) => {
      setTextCallback(event.results[0][0].transcript);
    };
    recognition.start();
  };

  const handleAddPost = () => {
    if (!newPostContent.trim() && !newPostImage) return;
    const newPost = {
      id: Date.now(),
      user: "You",
      avatar: "Y",
      content: newPostContent,
      image: newPostImage ? URL.createObjectURL(newPostImage) : "",
      replies: [],
      likes: 0,
      newReply: "",
    };
    setPosts([newPost, ...posts]);
    setNewPostContent("");
    setNewPostImage(null);
    // Also reset the file input visually
    document.getElementById("file-upload").value = "";
  };
  
  const handleLike = (postId) => {
    setPosts(
      posts.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  // --- JSX TO RENDER ---

  return (
    <div className="community-container">
      <div className="community-header">
        <h2>🌱 Krishi Samvaad – Farmer Community</h2>
      </div>

      <div className="posts-feed">
        <div className="new-post-box">
          <div className="textarea-wrapper">
            <textarea
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="Ask a question or share an update..."
            />
          </div>
          <div className="post-actions">
            {/* <label htmlFor="file-upload" className="file-upload-btn" title="Attach Image">📎</label> */}
            <label htmlFor="file-upload" className="file-upload-btn" title="Attach Image">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.122 2.122l7.81-7.81" />
            </svg>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={(e) => setNewPostImage(e.target.files[0])}
            />
            <button
              onClick={() => handleVoiceInput(setNewPostContent)}
              className="voice-btn"
              title="Use Voice Input"
            >
              🎙️
            </button>
            <button onClick={handleAddPost} className="submit-btn">Post</button>
          </div>
        </div>

        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="avatar">{post.avatar}</div>
              <div className="user-info">
                <h4>{post.user}</h4>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            {post.image && <img src={post.image} alt="crop" className="post-image" />}
            
            <div className="post-footer">
              <button onClick={() => handleLike(post.id)} className="like-btn">
                👍 Like ({post.likes})
              </button>
              <span className="reply-count">💬 Replies ({post.replies.length})</span>
            </div>

            <div className="replies-section">
              {post.replies.map((reply, index) => (
                <p key={index} className="reply">{reply}</p>
              ))}
            </div>
            
            <div className="reply-box">
              <input
                type="text"
                placeholder="Write a comment..."
                value={post.newReply}
                onChange={(e) => handleReplyChange(post.id, e.target.value)}
              />
              <button onClick={() => handleAddReply(post.id)}>➤</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityPage;