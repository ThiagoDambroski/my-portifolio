import React from 'react'
import Components from '../Components/Components'
import Classes from '../Classes/Classes'
import '../projectContent.css'

function Fullstack({item}) {
  return (
    <div>
        <Components item={item}/>
        <h2 className='full-stack-type-title'>Back End methods</h2>
        <Classes item={item} lineNumber={2}/>
    </div>
  )
}

export default Fullstack