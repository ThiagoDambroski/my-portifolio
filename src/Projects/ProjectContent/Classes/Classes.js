import React, { useState } from 'react';
import './classes.css';
import CarousselImages from './CarousselImages';
import Table from './Table';


function Classes({ informationPage }) {

  const [active,setActive] = useState(false)

  const [isListVisible, setListVisible] = useState(
    Array(informationPage.classes.length).fill(false)
  );

  const toggleList = (index) => {
    const updateList = [...isListVisible];
    updateList[index] = !updateList[index];
    setListVisible(updateList);
    setActive(!active)
  };

  return (
    <div className='labels'>
      <div className='center-title'>
          <h1>Classes</h1>
      </div>
      {informationPage.classes.map((item, index) => (
        <React.Fragment key={index}>
          <label onClick={() => toggleList(index)} className={`class-label`} key={index}>{item}</label>
          {isListVisible[index] && (
            <div className='method-table'>
              { (informationPage.images[index]) && 
                  <CarousselImages
                    images={informationPage.images[index]}
                    options={1}
                  />
              }
              <h2>Properties</h2>
                <Table
                  data={informationPage.properties[index]}
                  dataType={"properties"}
                />
              <h2>Methods</h2> 
                <Table
                  data={informationPage.methods[index]}
                  dataType={"methods"}
                />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Classes;
