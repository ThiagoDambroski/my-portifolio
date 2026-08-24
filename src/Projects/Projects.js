import { useEffect } from "react";
import ProjectContent from "./ProjectContent/ProjectContent";
import ProjectPage from "./ProjectPage/ProjectPage";

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
