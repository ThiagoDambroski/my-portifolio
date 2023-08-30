import React, { useState } from 'react'
import './projectShowCase.css'
import ToggleProject from './ToggleProject'
import ToggleButton from './ToggleButton'

function ProjectsShowCase({projects}) {

  const backEndProjects = projects.filter((item) => item.type === 1)
  const frontEndProjects = projects.filter((item) => item.type === 2)

  const [activeProject,setActiveProject] = useState(0)
 


  return (
    <div className='showCase-page'>
      <div className='flex-toggle'>
        <ToggleButton
          title = 'Back-End'
          activeProject = {activeProject}
          setActiveProject = {setActiveProject}
          
        />
        <ToggleButton
          title = 'Front-End'
          activeProject = {activeProject}
          setActiveProject = {setActiveProject}
          
        />
      </div>
      <div className='showCase-content'>
        {activeProject === 0 &&
          <ToggleProject
          projects={backEndProjects}
          />
        }
        {activeProject === 1 &&
          <ToggleProject
          projects={frontEndProjects}
          />
        }
       
      </div>
      

    </div>
  )
}

export default ProjectsShowCase