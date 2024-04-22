import React, { useState } from "react";
import "./projectShowCase.css";
import { useEffect } from "react";
import ToggleProject from "./ToggleProject";
import ToggleButton from "./ToggleButton";

function ProjectsShowCase({ projects }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const backEndProjects = projects.filter((item) => item.type === 1);
  const frontEndProjects = projects.filter((item) => item.type === 2);

  const [activeProject, setActiveProject] = useState(1);

  return (
    <div className="showCase-page">
      <div className="flex-toggle">
        <ToggleButton
          title="Front-End"
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
        <ToggleButton
          title="Back-End"
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
      </div>
      <div className="showCase-content">
        {activeProject === 0 && <ToggleProject projects={backEndProjects} />}
        {activeProject === 1 && <ToggleProject projects={frontEndProjects} />}
      </div>
    </div>
  );
}

export default ProjectsShowCase;
