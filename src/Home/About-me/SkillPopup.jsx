import React from "react";
import { useState } from "react";
import smallLeftArrow from '../../assets/images/icon/compact-left-arrow.png'
import smallRightArrow from '../../assets/images/icon/compact-right-arrow.png'

function SkillPopup({ skill, isVisible,nextSkill,previousSkill }) {
  const skillInfos = {
    react: [
      "Components",
      "Props and Prop Drilling",
      "Click Events",
      "Controlled Inputs",
      "List and Keys",
      "CRUD",
      "UseState Hook",
      "UseEffect",
      "Fetch API Data",
      "Fetch Errors",
      "Electron",
      "Local Storage",
      "React Routes",
      "Code Splitting",
    ],

    java: [
      "Java Fundamentals",
      "OOP",
      "Spring Boot",
      "Exception Handling",
      "Threads",
      "Java GUI",
      "JDBC",
      "Unit Testing",
      "Game Development",
    ],

    spring: [
      "Spring Core",
      "Spring Boot Configuration",
      "Spring MVC",
      "RESTful APIs",
      "Spring Data JPA",
      "Spring Security",
      "Spring Testing",
      "Error Handling",
    ],

    html: ["HTML5 tags", "HTML5 Structure", "HTML5 Entity", 
      "HTML5 Forms","HTML5 Audio/Video","HTML5 Web Storage",
      ],

    css: [
      "Bootstrap 5",
      "CSS Selectors",
      "CSS Box Model",
      "CSS Layouts",
      "CSS Grid",
      "CSS Transitions",
      "CSS Filters",
      "CSS Variables",
      "CSS Typography",
      "CSS Positioning",
      "CSS Media Queries",
      "CSS Flexbox",
      "CSS Pseudo-classes",
    ],

    javaScript: [
      "Basic Syntax",
      "DOM Manipulation",
      "DOM Events",
      "Event Handling",
      "ES6 Features",
      "Promises",
      "Fetch",
      "JavaScript Classes",
      "JavaScript Modules",
      "Async Programming",
      "JSON",
      "Arrays and Objects",
      "Error Handling",
    ],

    phyton: ["Phyton Fundamentals", "OOP", "Control Flow", "Pandas"],

    mysql: [
      "SQL Basics",
      "Data Manipulation",
      "Database Design",
      "DDL",
      "DQL",
      "DML",
      "Data Joins",
    ],

    git: [
      "Git Commands",
      "Branching and Merging",
      "Pull Requests",
      "Git Workflows",
    ],
    typeScript: [
    "React + TypeScript",
    "Basic Syntax",
    "Type Annotations",
    "Interfaces",
    "Enums",
    "Generics",
    "Type Inference",
    "Union and Intersection Types",
    "Decorators"
  ],
  };

  const [skillPage, setSkillPage] = useState(0);

  const numberPerPage = 15

  const totalSkills = skillInfos[skill].length;
  const totalPages = Math.ceil(totalSkills / numberPerPage);

  const nextPage = () => {
    const nextPageValue = skillPage + 1;

    if (nextPageValue < totalPages) {
      setSkillPage(nextPageValue);
    }
  };

  const prevPage = () => {
    const prevPageValue = skillPage < 1;
    if (prevPageValue >= 0) {
      setSkillPage(prevPageValue);
    }
  };

  if (!isVisible) return null;

  

  return (
    <div className="popup">
      <ul>
        <div className="skill-title">
          <div className="skill-title-head">
            <img src={smallLeftArrow} onClick={previousSkill}/>
            <p>{skill}</p>
            <img src={smallRightArrow} onClick={nextSkill}/>
          </div>
        </div>
        <br />
        {totalSkills > numberPerPage ? (
          <>
            {skillInfos[skill]
              .slice(11 * skillPage, numberPerPage * (skillPage + 1))
              .map((item) => (
                <li>{item}</li>
              ))}
            <div style={{ display: "flex" }}>
              {skillPage > 0 && (
                <>
                  <li className="cursorPointer" onClick={() => prevPage()}>
                    {"<-"}
                  </li>
                </>
              )}
              {skillPage + 1 < totalPages && (
                <>
                  {" "}
                  <li className="cursorPointer" onClick={() => nextPage()}>
                    {"->"}
                  </li>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            {skillInfos[skill].map((item) => (
              <li>{item}</li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

export default SkillPopup;
