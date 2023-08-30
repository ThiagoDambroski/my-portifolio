import React from 'react'
import gitHub from '../assets/images/icon/programs icon/github-icon.png'
import { NavLink } from 'react-router-dom'

function ToggleProject({projects}) {

  return (
    <>
      {
        projects.map((item) => 
          <div className='toggle-project'>
            <img src={item.iconImage} style={{maxWidth: '10%'}}/>
            <NavLink to={item.navLink}><span>{item.title}</span></NavLink>
            <a href={item.gitLink} className='github-link' target='_blank'>
              <img src={gitHub} style={{maxWidth: '100%'}} />
            </a>
           
          </div>
        )
       
        }
    </>
    
  )
}

export default ToggleProject