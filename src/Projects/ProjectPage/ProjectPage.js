import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './projectpage.css'
import gitHub from '../../assets/images/icon/programs icon/github-icon.png'
import smallRightArrow from '../../assets/images/icon/small-right-arrow.png'
import smallLeftArrow from '../../assets/images/icon/small-left-arrow.png'

function ProjectPage({item}) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  const [ativeImage,setAtiveImage] = useState(0)
  const maxImage = item.image.length - 1

  const changeToNext = () => {
    if(ativeImage === maxImage){
      setAtiveImage(0)
    }else{
      setAtiveImage(ativeImage + 1)
    }
    
  }

  const changeToPrevious = () => {
    if(ativeImage === 0){
      setAtiveImage(maxImage)
    }else{
      setAtiveImage(ativeImage - 1)
    }
  }

 

  return (
    <div className='project-page'>
        <button onClick={goBack} className="back-button"/>
      <div className='project-title'>
        <a href={item.gitLink} target='_blank'>
          <img src={gitHub}/>
        </a>            
        <h2 >{item.title}</h2>
      </div>

      <div className='div-image'>
        <img src={smallLeftArrow} className='small-arrow' onClick={changeToPrevious}/>
        <img src={item.image[ativeImage]} className='project-image' />
        <img src={smallRightArrow} className='small-arrow' onClick={changeToNext}/>
      </div>
         

      <div className='project-info'>
        <p>{item.description}</p> 
          
      </div>        
        

       
    </div>
  )
}

export default ProjectPage