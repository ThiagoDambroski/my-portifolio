import { useState } from "react";
import smallLeftArrow from "../../assets/images/icon/compact-left-arrow.png";
import smallRightArrow from "../../assets/images/icon/compact-right-arrow.png";

function SkillPopup({ skill, isVisible, nextSkill, previousSkill }) {
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
    html: [
      "HTML5 tags",
      "HTML5 Structure",
      "HTML5 Entity",
      "HTML5 Forms",
      "HTML5 Audio/Video",
      "HTML5 Web Storage",
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
    python: ["Python Fundamentals", "OOP", "Control Flow", "Pandas"],
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
      "Decorators",
    ],
  };

  const [skillPage, setSkillPage] = useState(0);
  const numberPerPage = 15;
  const totalSkills = skillInfos[skill].length;
  const totalPages = Math.ceil(totalSkills / numberPerPage);
  const pageStart = numberPerPage * skillPage;
  const pageEnd = numberPerPage * (skillPage + 1);

  const nextPage = () => {
    setSkillPage((currentPage) =>
      Math.min(currentPage + 1, totalPages - 1)
    );
  };

  const previousPage = () => {
    setSkillPage((currentPage) => Math.max(currentPage - 1, 0));
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup">
      <div className="skill-title">
        <div className="skill-title-head">
          <button type="button" onClick={previousSkill} aria-label="Previous skill">
            <img src={smallLeftArrow} alt="" />
          </button>
          <p>{skill}</p>
          <button type="button" onClick={nextSkill} aria-label="Next skill">
            <img src={smallRightArrow} alt="" />
          </button>
        </div>
      </div>

      <ul>
        {skillInfos[skill].slice(pageStart, pageEnd).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div style={{ display: "flex" }}>
          <button
            type="button"
            className="cursorPointer"
            onClick={previousPage}
            disabled={skillPage === 0}
          >
            {"<-"}
          </button>
          <button
            type="button"
            className="cursorPointer"
            onClick={nextPage}
            disabled={skillPage === totalPages - 1}
          >
            {"->"}
          </button>
        </div>
      )}
    </div>
  );
}

export default SkillPopup;
