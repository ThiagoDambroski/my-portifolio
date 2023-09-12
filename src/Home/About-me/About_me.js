import React, { useState } from 'react'
import './about_me.css'
import thiago from '../../assets/images/thiago.jpg'
import reactIcon from '../../assets/images/icon/programs icon/react.png'
import javaIcon from '../../assets/images/icon/programs icon/java.png'
import springIcon from '../../assets/images/icon/programs icon/spring-icon.svg'
import phytonIcon from '../../assets/images/icon/programs icon/phytonIcon.png'
import htmlIcon from '../../assets/images/icon/programs icon/html.png'
import cssIcon from '../../assets/images/icon/programs icon/css.png'
import jsIcon from '../../assets/images/icon/programs icon/js.png'
import mySqlIcon from '../../assets/images/icon/programs icon/mysql.png'
import gitIcon from '../../assets/images/icon/programs icon/git.png'
import SkillPopup from './SkillPopup'


function About_me() {

  const [hoverSkill, setHoverSkill] = useState('react')

  const handleSkillHover = (skill) => {
    setHoverSkill(skill)
  }


  return (
    <div className='page-about-me'>
        <img src={thiago} className='photo'/>
        <div className='informations'>
            <div className='skills'>
              <h2 className='code' >My Skills:</h2>
            </div>
            
            <div className='icons'>

              <div className='row'>
                <img src={reactIcon} className='program-icon'
                  onMouseEnter={() => handleSkillHover('react')}
                  
                />

                <SkillPopup skill={'react'} isVisible={hoverSkill === 'react'}/>
                <SkillPopup skill={'spring'} isVisible={hoverSkill === 'spring'}/>
                <SkillPopup skill={'java'} isVisible={hoverSkill === 'java'}/>
                <SkillPopup skill={'html'} isVisible={hoverSkill === 'html'}/>
                <SkillPopup skill={'css'} isVisible={hoverSkill === 'css'}/>
                <SkillPopup skill={'javaScript'} isVisible={hoverSkill === 'javaScript'}/>
                <SkillPopup skill={'phyton'} isVisible={hoverSkill === 'phyton'}/>
                <SkillPopup skill={'mysql'} isVisible={hoverSkill === 'mysql'}/>
                <SkillPopup skill={'git'} isVisible={hoverSkill === 'git'}/>

                <img src={javaIcon} className='program-icon'
                  onMouseEnter={() => handleSkillHover('java')}
                  
                />
               

                <img src={springIcon} className='program-icon'
                  onMouseEnter={() => handleSkillHover('spring')}
                  
                />

                
              </div>
              <div className='row'>
                <img src={htmlIcon} className='program-icon'
                  onMouseEnter={() => handleSkillHover('html')}
                  
                />
                

                <img src={cssIcon} className='program-icon'
                  onMouseEnter={() => handleSkillHover('css')}
                  
                />
                

                <img src={jsIcon} className='program-icon'
                  onMouseEnter={() => handleSkillHover('javaScript')}
                 
                />
                
              
              </div>
              <div className='row'>
                <img src={phytonIcon} className='program-icon'
                  onMouseEnter={() => handleSkillHover('phyton')}
                 
                />
                

                <img src={mySqlIcon} className='program-icon'
                  onMouseEnter={() => handleSkillHover('mysql')}
                 
                />
                

                <img src={gitIcon} className='program-icon'
                  onMouseEnter={() => handleSkillHover('git')}
                 
                />
                
                
              </div>


            </div>
            
        </div>
       
    </div>
  )
}

export default About_me