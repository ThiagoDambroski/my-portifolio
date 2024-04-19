import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./home.css";

function HomePage() {
  const text = "Hi,i am Thiago Dambroski";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [stopCursor, setStopCursor] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setStopCursor(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, text]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      if (!stopCursor) {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="page-home">
      <div className="title">
        {displayText}
        {showCursor && !stopCursor && "|"}
      </div>
      {stopCursor && <div className="slide">fullstack developer</div>}
    </div>
  );
}

export default HomePage;
