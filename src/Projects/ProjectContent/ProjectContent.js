import React, { Component } from 'react'
import { useState } from 'react';
import './projectContent.css'
import Classes from './Classes/Classes';
import Components from './Components/Components';
function ProjectContent({projectData}) {

 
  return (
    <div className='project-content-page'>

      <div className='project-content-content'>
          {projectData.type === 1 && 
            <Classes 
                informationPage = {projectData.informationPage}
            />
          }
          {projectData.type === 2 && 
              <Components
                informationPage={projectData.informationPage}
              />
              
          }

      </div>

        
    </div> 
  )
}

export default ProjectContent