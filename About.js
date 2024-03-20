import React from "react";
import "./about.css";
import Navbar from "./Navbar";
import MyVideoComponent from "./MyVideoComponent";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <h1>About Us</h1>
        <div className="video-container">
          <MyVideoComponent/>
        </div>
      </div>
    </div>
  );
}
