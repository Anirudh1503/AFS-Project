import axios from "axios";
import React, { useState } from "react";
import "./contact.css";
import Navbar from "./Navbar";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("http://example.com/contact", {
        name: name,
        email: email,
        message: message,
      });
      if (response.status === 200) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} required/>
          <br />
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required/>
          <br />
          <label>Message:</label>
          <textarea value={message} onChange={handleMessageChange} rows="4" required/>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
