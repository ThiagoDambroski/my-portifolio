import React, { useState, useEffect } from "react";
import "./home.css";

function HomePage() {
  const text = "THIAGO DAMBROSKI";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  const [showCursor, setShowCursor] = useState(true);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 60);

      return () => clearTimeout(timer);
    } else {
      setFinished(true);
    }
  }, [index, text]);

  useEffect(() => {
    const cursor = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursor);
  }, []);

  return (
  <div className="page-home">
    <div className="home-content">
      
      <div className="home-header">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span>home.system</span>
      </div>

      <div className="home-body">
        <h1 className="home-title">
          {displayText}
          <span className="cursor">{showCursor && "|"}</span>
        </h1>

        <h2 className={`home-subtitle ${finished ? "visible" : ""}`}>
          Full-stack Developer
        </h2>
      </div>

    </div>
  </div>
);
}

export default HomePage;