import React, { Component } from "react";
import { useState } from "react";
import "./projectContent.css";
import Classes from "./Classes/Classes";
import Components from "./Components/Components";
import Fullstack from "./FullStack/Fullstack";
function ProjectContent({ projectData }) {
  return (
    <div className="project-content-page">
      <div className="project-content-content">
        {projectData.type === 1 && (
          <Classes item={projectData} 
          lineNumber={1}/>
        )}
        {projectData.type === 2 && <Components item={projectData}  />}
        {projectData.type === 3 && <Fullstack item={projectData} />}
      </div>
    </div>
  );
}

export default ProjectContent;
