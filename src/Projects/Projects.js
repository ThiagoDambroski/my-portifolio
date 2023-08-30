import React from 'react'
import ProjectPage from './ProjectPage/ProjectPage'
import ProjectContent from './ProjectContent/ProjectContent'

function Projects({projectData}) {
  return (
    <>
        <ProjectPage
            item={projectData}
        />
        <ProjectContent
            projectData = {projectData}
            
        />
    </>
  )
}

export default Projects