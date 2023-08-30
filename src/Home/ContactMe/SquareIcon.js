import React from 'react'

function SquareIcon({image,title,description,type}) {

  const handleClick = () => {

    if(type === 'email'){
      window.location.href = 'mailto:dambroskic@hotmail.com'
    }
    if(type === 'tel'){
      const phoneNumber = '5581997989475';
      window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank')
    }
    if(type === 'git'){
      window.open(`https://github.com/ThiagoDambroski`, '_blank')
    }
    if(type === 'linkedin'){
      window.open(`https://linkedin.com/in/thiago-dambroski-516a43211/`, '_blank')
    }
    
  }
  

  return (
    <div className='square-icon' onClick={handleClick}> 
        <img src={image}/>
        <span className='square-title'>{title}</span>
        <p>{description}</p>

    </div>
  )
}

export default SquareIcon