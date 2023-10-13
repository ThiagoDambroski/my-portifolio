import React from 'react'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './page1.css'
import { projectData } from '../../ProjectData'
import rigthArrow from '../../assets/images/icon/right-arrow.png'
import leftArrow from '../../assets/images/icon/left-arrow.png'
import compactLeftArrow from '../../assets/images/icon/compact-left-arrow.png'
import compactRigthArrow from '../../assets/images/icon/compact-right-arrow.png' 

function Page1({resetScreen}) {

  const backEndProjects = projectData.filter((item) => item.type === 1)
  const frontEndProjects = projectData.filter((item) => item.type === 2)
  //const fullStackProjects = projectData.filter((item) => item.type === 3)

  const [type,setType] = useState(2)
  const [countProject,setCountProject] = useState(0)
  const [projectName,setProjectName] = useState('Back-end Projects')
  const [activeProject,setActiveProject] = useState(backEndProjects)
  

  useEffect(() => {
    if(type === 0){
      setProjectName("Back-end Projects")
      setActiveProject(backEndProjects) 
      
    }else if(type === 1){
      setProjectName("Front-End Projects")
      setActiveProject(frontEndProjects)

    }
    //else if(type === 2) {
      //setProjectName("Full Stack Projects")
      //setActiveProject(fullStackProjects)
   // }

  },[type])

  

  const changeNext = () => {

    if(type === 1){
      setType(0)
      setCountProject(0)
    }else{
      setType(type + 1)
      setCountProject(0)
    }
  }
  
  const changePrevious = () => {

    if(type === 0){
      setType(1)
      setCountProject(0)
    }else{
      setType(type - 1)
      setCountProject(0)
    }
  }

  const changeCountNext = () => {
    if(countProject + 1 > activeProject.length - 1){
      setCountProject(0)
    }else{
      setCountProject(countProject + 1)
    }
  }

  const changeCountPrevious = () => {
    console.log(activeProject.length)
    if(countProject - 1 < 0){
      setCountProject(activeProject.length - 1)
    }else{
      setCountProject(countProject - 1)
    }
  }


  return (
    <div className='page1'>
      <div className='project-type'>
        <img src={leftArrow} className='arrow-img' onClick={changePrevious} alt='left-arrow' />
        <h1 className='page1-title'>{projectName}</h1>
        <img src={rigthArrow} className='arrow-img' onClick={changeNext} alt='right-arrow'/>

      </div>
      
      <div className='div-projects-images'>
        {activeProject.length > 1 &&
          <img src={compactLeftArrow} className='arrow-img' onClick={changeCountPrevious} alt='left-arrow' />
        }
        <img className='projects-image' src={activeProject[countProject].image[0]}/>
        {activeProject.length > 1 &&
          <img src={compactRigthArrow} className='arrow-img' onClick={changeCountNext} alt='right-arrow'/>
        }


      </div> 
      
      
       <div className='projects-informations'>

        <h2 className='code'>{activeProject[countProject].title}</h2>
        <h3 className='code'>{activeProject[countProject].description}</h3>
        
        <NavLink to={activeProject[countProject].navLink}>
          <button className='project-button' onClick={resetScreen}>View More</button>
        </NavLink>


       </div>
    </div>
  )
}

export default Page1