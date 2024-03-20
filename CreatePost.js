import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./CreatePost.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await axios.post(
        "http://localhost:3000/post",
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 201) {
        navigate("/posts");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="create-post-container">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} required/>
          <br />
          <label>Content:</label>
          <textarea value={content} onChange={handleContentChange} rows="4" required></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
