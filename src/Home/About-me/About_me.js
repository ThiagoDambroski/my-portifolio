import React, { useState,useEffect, useRef } from "react";
import "./about_me.css";
import thiago from "../../assets/images/thiago.jpg";
import reactIcon from "../../assets/images/icon/programs icon/react.png";

import javaIcon from "../../assets/images/icon/programs icon/java.png";

import springIcon from "../../assets/images/icon/programs icon/spring-icon.png";

import phytonIcon from "../../assets/images/icon/programs icon/phytonIcon.png";

import htmlIcon from "../../assets/images/icon/programs icon/html.png";

import cssIcon from "../../assets/images/icon/programs icon/css.png";

import jsIcon from "../../assets/images/icon/programs icon/js.png";

import mySqlIcon from "../../assets/images/icon/programs icon/mysql.png";

import gitIcon from "../../assets/images/icon/programs icon/git.png";

import SkillPopup from "./SkillPopup";
import tsIcon from "../../assets/images/icon/programs icon/ts.png"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function AboutMe() {
  const [generalActive, setGeneralActive] = useState("react");

  const [hoverSkill, setHoverSkill] = useState("react");

  const skillsString = ["react","java","spring","html","css","javaScript","typeScript","phyton","mysql","git"]

  const handleClick = (skill) => {
    setHoverSkill(skill);
    setGeneralActive(skill);
  };

  const handleNextSkill = () => {
    const skillIndex = skillsString.findIndex(skill => skill === hoverSkill);
    const newSkill = skillsString[skillIndex + 1] || skillsString[0]; 
    setHoverSkill(newSkill);
    setGeneralActive(newSkill);
  };

  const handlePreviousSkill = () => {
    const skillIndex = skillsString.findIndex(skill => skill === hoverSkill)
    const newSkill = skillsString[skillIndex - 1] || skillsString[skillsString.length - 1]
    setHoverSkill(newSkill);
    setGeneralActive(newSkill);
  }

  /*typeWriteEffect*/
  const [displayText, setDisplayText] = useState(""); // Handle the typed effect
  const [currentIndex, setCurrentIndex] = useState(0); // For tracking typing index
  const [startTyping, setStartTyping] = useState(false); // Control when typing starts

  const [maxLength, setMaxLength] = useState(80); 
  const [textToUse,setTextToUse] = useState('laptop')


useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 700) { 
      setMaxLength(50);
      setTextToUse('celphone') 
    } else {
      setMaxLength(80); 
      setTextToUse('laptop')
    }
  };

  handleResize(); 
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);


  function insertLineBreaks(text, maxLength) {
    const regex = new RegExp(`(.{1,${maxLength}})(\\s|$)`, 'g');
    return  textToUse === 'laptop' ? text.match(regex).join('"+\n      "') : text.match(regex).join('"+\n"');
  }
  
  const longText = "From a young age, I've been captivated by the endless possibilities of technology, driving my passion for IT. My curiosity in creating websites, programs, and games has fueled my journey in this field. As a student, I'm eager to further develop my skills and gain invaluable professional experience. In addition to my studies, I've been actively working as a freelance front-end and full-stack developer, gaining hands-on experience and applying my skills in real-world projects. In addition to my technical skills, I am an excellent collaborator and communicator. I thrive in environments where I can share ideas, learn from others, and contribute to collective success. Looking ahead, my goal is not only to excel in the IT industry but also to continuously push the boundaries of what technology can achieve.";
  
  const wrappedText = insertLineBreaks(longText, maxLength); 
  


  
  const fullText = textToUse  === 'laptop' ?
   `
  class Developer {
      constructor(
          public fullName: string,
          public age: number,
          public aboutMe: string
      ) { }
  }
  
  const thiago = new Developer(
      "Thiago Dambroski Cavalcanti Cruz",
      22,
      "${wrappedText}"
  );
  `
  :
   `
  class Developer {
      constructor(
          public fullName: string,
          public age: number,
          public aboutMe: string
      ) { }
  }
  
  const thiago = new Developer(
      "Thiago Dambroski Cavalcanti Cruz",
      22,
"${wrappedText}"
  );
  `


  const aboutMeRef = useRef(null);

  // Trigger typing effect when the element becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartTyping(true);
        }
      },
      { threshold: 0.1 } 
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  // Typing effect logic
  useEffect(() => {
    if (startTyping && currentIndex < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prevText) => prevText + fullText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, -1); // Typing speed
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, fullText, startTyping]);

  return (
    <div className="page-about-me" ref={aboutMeRef}>
      <img src={thiago} className="photo" alt="selfie" />
      <div className="page-about-me-cover-letter">
        <h1>About Me</h1>
        <div className="page-about-me-text-background">
          <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              wrapLines={true}
              wrapLongLines={true}
              showLineNumbers={true}
              className="syntax-highlighter" // Use the CSS class to style the SyntaxHighlighter
              
            >
              {displayText}
            </SyntaxHighlighter>
        </div>
        
      </div>
      <div className="informations">
        <div className="informations-pop-up">
          <SkillPopup skill={"react"} isVisible={hoverSkill === "react"} nextSkill={handleNextSkill} previousSkill={handlePreviousSkill} />
          <SkillPopup skill={"spring"} isVisible={hoverSkill === "spring"}  nextSkill={handleNextSkill} previousSkill={handlePreviousSkill}/>
          <SkillPopup skill={"java"} isVisible={hoverSkill === "java"}  nextSkill={handleNextSkill} previousSkill={handlePreviousSkill}/>
          <SkillPopup skill={"html"} isVisible={hoverSkill === "html"}  nextSkill={handleNextSkill} previousSkill={handlePreviousSkill}/>
          <SkillPopup skill={"css"} isVisible={hoverSkill === "css"} nextSkill={handleNextSkill} previousSkill={handlePreviousSkill} />
          <SkillPopup
            skill={"javaScript"}
            isVisible={hoverSkill === "javaScript"}
            nextSkill={handleNextSkill}
            previousSkill={handlePreviousSkill}
          />
          <SkillPopup skill={"typeScript"} isVisible={hoverSkill === "typeScript"} nextSkill={handleNextSkill} previousSkill={handlePreviousSkill}/>
          <SkillPopup skill={"phyton"} isVisible={hoverSkill === "phyton"}  nextSkill={handleNextSkill} previousSkill={handlePreviousSkill}/>
          <SkillPopup skill={"mysql"} isVisible={hoverSkill === "mysql"}  nextSkill={handleNextSkill} previousSkill={handlePreviousSkill}/>
          <SkillPopup skill={"git"} isVisible={hoverSkill === "git"} nextSkill={handleNextSkill} previousSkill={handlePreviousSkill}/>
        </div>
        <div className="informations-skills">
          <div className="skills">
            <h2 className="code">My Skills:</h2>
          </div>

          <div className="icons">
            <div className="row">
              <img
                src={ reactIcon}
                className={generalActive === "react" ? "program-icon pressed" : "program-icon"}
                onClick={() => handleClick("react")}
                alt="react-icon"
              />

              <img
                src={javaIcon}
                className={generalActive === "java" ? "program-icon pressed" : "program-icon"}
                onClick={() => handleClick("java")}
                alt="java-icon"
              />

              <img
                src={springIcon}
                className={generalActive === "spring" ? "program-icon pressed" : "program-icon"}
                onClick={() => handleClick("spring")}
                alt="spring-icon"
              />
            </div>
            <div className="row">
              <img
                src={htmlIcon}
                className={generalActive === "html" ? "program-icon pressed" : "program-icon"}
                onClick={() => handleClick("html")}
                alt="html-icon"
              />

              <img
                src={cssIcon}
                className={generalActive === "css" ? "program-icon pressed" : "program-icon"}
                onClick={() => handleClick("css")}
                alt="css-icon"
              />

              <img
                src={jsIcon}
                className={generalActive === "javaScript" ? "program-icon pressed" : "program-icon"}
                onClick={() => handleClick("javaScript")}
                alt="javaScript-icon"
              />
            </div>
            <div className="row">

            <img
                src={ tsIcon}
                className={generalActive === "typeScript" ? "program-icon pressed" : "program-icon"}
                onClick={() => handleClick("typeScript")}
                alt="git-icon"
              />
              <img
                src={phytonIcon}
                className={generalActive === "phyton" ? "program-icon pressed" : "program-icon"}
                onClick={() => handleClick("phyton")}
                alt="phyton-icon"
              />

              <img
                src={mySqlIcon}
                className={generalActive === "mysql" ? "program-icon pressed" : "program-icon"}
                onClick={() => handleClick("mysql")}
                alt="mysql-icon"
              />

            </div>
            <div className="row">
            <img
                src={gitIcon}
                className={generalActive === "git" ? "program-icon pressed" : "program-icon"}
                onClick={() => handleClick("git")}
                alt="git-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
