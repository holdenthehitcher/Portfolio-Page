import React from "react";
import "./TopSection.css";

export default function TopSection() {
  return (
    <div className="wallpaper">
      <div>
        <h1>Holden Nakamura</h1>
        <text>Front-End Web Developer</text>
      </div>
      <div>
        <text>Proficient with the following:</text>
        {/* Insert box with images/ icons */}
        <text>React + Native, HTML/CSS/JavaScript, Bootstrap, Node.js</text>
      </div>
    </div>
  );
}
