import React from 'react'
import gitHub from '../assets/images/icon/programs icon/github-icon.png'
import { NavLink } from 'react-router-dom'

function ToggleProject({projects}) {

  return (
    <>
      {
        projects.map((item) => 
          <div className='toggle-project'>
            <img src={item.iconImage} style={{maxWidth: '10%'}} alt='image-icon'/>
            <NavLink to={item.navLink}><span>{item.title}</span></NavLink>
            <a href={item.gitLink} className='github-link' target='_blank' rel='noreferrer'>
              <img src={gitHub} style={{maxWidth: '100%'}}  alt='git-icon'/>
            </a>
           
          </div>
        )
       
        }
    </>
    
  )
}

export default ToggleProject