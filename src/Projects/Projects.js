import React from "react";
import { useEffect } from "react";
import ProjectPage from "./ProjectPage/ProjectPage";
import ProjectContent from "./ProjectContent/ProjectContent";

function Projects({ projectData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectPage item={projectData} />
      <ProjectContent projectData={projectData} />
    </>
  );
}

export default Projects;
