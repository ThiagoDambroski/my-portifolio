import React from "react";
import { useState } from "react";

function SkillPopup({ skill, isVisible }) {
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

    html: ["HTML5 tags", "HTML5 Structure", "HTML5 Entity", "HTML5 Forms"],

    css: [
      "Bootstrap 5",
      "CSS Selectors",
      "CSS Box Model",
      "CSS Layouts",
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
  };

  const [skillPage, setSkillPage] = useState(0);

  const totalSkills = skillInfos[skill].length;
  const totalPages = Math.ceil(totalSkills / 11);

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
          <p>{skill}</p>
        </div>
        <br />
        {totalSkills > 11 ? (
          <>
            {skillInfos[skill]
              .slice(11 * skillPage, 11 * (skillPage + 1))
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
