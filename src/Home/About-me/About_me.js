import React, { useState } from "react";
import "./about_me.css";
import thiago from "../../assets/images/thiago.jpg";
import reactIcon from "../../assets/images/icon/programs icon/react.png";
import reactIconPress from "../../assets/images/icon/programs icon/reactPress.png";
import javaIcon from "../../assets/images/icon/programs icon/java.png";
import javaIconPress from "../../assets/images/icon/programs icon/javaPress.png";
import springIcon from "../../assets/images/icon/programs icon/spring-icon.png";
import springIconPress from "../../assets/images/icon/programs icon/spring-icon-press.png";
import phytonIcon from "../../assets/images/icon/programs icon/phytonIcon.png";
import phytonIconPress from "../../assets/images/icon/programs icon/pythonIconPress.png";
import htmlIcon from "../../assets/images/icon/programs icon/html.png";
import htmlIconPress from "../../assets/images/icon/programs icon/htmlPress.png";
import cssIcon from "../../assets/images/icon/programs icon/css.png";
import cssIconPress from "../../assets/images/icon/programs icon/cssPress.png";
import jsIcon from "../../assets/images/icon/programs icon/js.png";
import jsIconPress from "../../assets/images/icon/programs icon/jsPress.png";
import mySqlIcon from "../../assets/images/icon/programs icon/mysql.png";
import mySqlIconPress from "../../assets/images/icon/programs icon/mysqlPress.png";
import gitIcon from "../../assets/images/icon/programs icon/git.png";
import gitaIconPress from "../../assets/images/icon/programs icon/gitPress.png";
import SkillPopup from "./SkillPopup";

function AboutMe() {
  const [generalActive, setGeneralActive] = useState("react");

  const [hoverSkill, setHoverSkill] = useState("react");

  const handleSkillHover = (skill) => {};

  const handleClick = (skill) => {
    setHoverSkill(skill);
    setGeneralActive(skill);
  };

  return (
    <div className="page-about-me">
      <img src={thiago} className="photo" alt="selfie" />
      <div className="page-about-me-cover-letter">
        <h1>About Me</h1>
        <p>
          From a young age, I have been captivated by the endless possibilities
          that technology can offer. My curiosity in creating websites,
          programs, and games has been a driving force behind my passion for the
          IT field. Now, as a student, I am eager to further develop my skills
          and knowledge in order to gain invaluable professional experience. As
          a dedicated and disciplined individual, I am confident that I can make
          a valuable contribution to your company. With my strong work ethic and
          commitment to excellence, I am eager to take on new challenges and
          achieve success in the IT industry.
          <br />
          In addition to my technical skills, I am an excellent collaborator and
          communicator. I thrive in team settings, where I can share ideas,
          learn from others, and contribute to collective success. I believe
          that effective communication is at the core of any successful project,
          and I'm committed to fostering a positive and productive work
          environment. Looking ahead, my goal is not only to excel in the IT
          industry but also to continuously push the boundaries of what
          technology can achieve. I'm excited to embark on a journey of lifelong
          learning and innovation, leveraging my passion, dedication, and work
          ethic to make a lasting impact on the world of technology.
        </p>
      </div>
      <div className="informations">
        <div className="informations-pop-up">
          <SkillPopup skill={"react"} isVisible={hoverSkill === "react"} />
          <SkillPopup skill={"spring"} isVisible={hoverSkill === "spring"} />
          <SkillPopup skill={"java"} isVisible={hoverSkill === "java"} />
          <SkillPopup skill={"html"} isVisible={hoverSkill === "html"} />
          <SkillPopup skill={"css"} isVisible={hoverSkill === "css"} />
          <SkillPopup
            skill={"javaScript"}
            isVisible={hoverSkill === "javaScript"}
          />
          <SkillPopup skill={"phyton"} isVisible={hoverSkill === "phyton"} />
          <SkillPopup skill={"mysql"} isVisible={hoverSkill === "mysql"} />
          <SkillPopup skill={"git"} isVisible={hoverSkill === "git"} />
        </div>
        <div className="informations-skills">
          <div className="skills">
            <h2 className="code">My Skills:</h2>
          </div>

          <div className="icons">
            <div className="row">
              <img
                src={generalActive === "react" ? reactIconPress : reactIcon}
                className="program-icon"
                onClick={() => handleClick("react")}
                alt="react-icon"
              />

              <img
                src={generalActive === "java" ? javaIconPress : javaIcon}
                className="program-icon"
                onClick={() => handleClick("java")}
                alt="java-icon"
              />

              <img
                src={generalActive === "spring" ? springIconPress : springIcon}
                className="program-icon"
                onClick={() => handleClick("spring")}
                alt="spring-icon"
              />
            </div>
            <div className="row">
              <img
                src={generalActive === "html" ? htmlIconPress : htmlIcon}
                className="program-icon"
                onClick={() => handleClick("html")}
                alt="html-icon"
              />

              <img
                src={generalActive === "css" ? cssIconPress : cssIcon}
                className="program-icon"
                onClick={() => handleClick("css")}
                alt="css-icon"
              />

              <img
                src={generalActive === "javaScript" ? jsIconPress : jsIcon}
                className="program-icon"
                onClick={() => handleClick("javaScript")}
                alt="javaScript-icon"
              />
            </div>
            <div className="row">
              <img
                src={generalActive === "phyton" ? phytonIconPress : phytonIcon}
                className="program-icon"
                onClick={() => handleClick("phyton")}
                alt="phyton-icon"
              />

              <img
                src={generalActive === "mysql" ? mySqlIconPress : mySqlIcon}
                className="program-icon"
                onClick={() => handleClick("mysql")}
                alt="mysql-icon"
              />

              <img
                src={generalActive === "git" ? gitaIconPress : gitIcon}
                className="program-icon"
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
