import React, { useEffect, useState } from 'react'


function ToggleButton({title,activeProject,setActiveProject}) {


  const [active,setActive] = useState()


  useEffect(() => {
    setActive(activeProject === (title === 'Back-End' ? 0 : title === 'Front-End' ? 1 : 3));
  }, [activeProject]);

  const handleClick = () => {
    setActiveProject(title === 'Back-End' ? 0 : title === 'Front-End' ? 1 : 3);
  }


  return (
    <div className={`toggle-project-title ${active ? 'button-active' : ''}`} onClick={handleClick}>
        {title}
    </div>
  )
}

export default ToggleButton