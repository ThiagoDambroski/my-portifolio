import React from 'react'
import { useState } from 'react';
import CarousselImages from '../Classes/CarousselImages';
//classes.css
function  Components({ informationPage }) {

  
    const [isListVisible, setListVisible] = useState(
        Array(informationPage.components.length).fill(false)
      );
    
      const toggleList = (index) => {
        const updateList = [...isListVisible];
        updateList[index] = !updateList[index];
        setListVisible(updateList);
      };
    
      return (
        <div className='labels'>
          <div className='center-title'>
            <a href={informationPage.siteLink} target='_blank'>View yourself</a>
            <h1>Components</h1>
          </div>
          {informationPage.components.map((item, index) => (
            <React.Fragment key={index}>
              <label onClick={() => toggleList(index)} className='class-label'>{item}</label>
              {isListVisible[index] && (
                <div className='method-table'>
                  <h2>Component:</h2>
                <div/>
                  <img src={informationPage.componentsImages[index][0]} className='componentImage'/>
                  <h2 style={{ marginBottom: "0px" }}>Code:</h2>
                  {(informationPage.componentsImages[index]) && 
                      <CarousselImages
                        images={informationPage.componentsImages[index].slice(1) }
                        options={2}
                      />
                  }
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
      );
}

export default Components