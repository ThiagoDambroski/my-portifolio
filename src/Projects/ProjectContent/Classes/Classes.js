import React, { useState } from 'react';
import './classes.css';
import CarousselImages from './CarousselImages';
import Table from './Table';
import gitIcon from "../../../assets/images/icon/contact icon/github.png"
import TitleCode from "../../../Home/Page1/TitleCode";

function Classes({ item,lineNumber }) {
   const informationPage =  item.informationPage

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
      {item.type === 1 &&
        <div className="project-info">
        <p>{item.description}</p>
        </div>
      }
       
      <div className='center-title'>
        <div className="title-code-follow-up">
          <TitleCode
                  text={"const ClassesAndProperties:class"}
                  lineNumber={lineNumber}
          />
        
          
            {informationPage.classes.map((item, index) => (
              <React.Fragment key={index}>
                <label onClick={() => toggleList(index)} className={ isListVisible[index] ? `class-label-ative` : `class-label`} key={index}>{item}</label>
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
      </div>
      <div className="project-content-button-code" >
          <img src={gitIcon}/>
          <a href={item.gitLink} target="_blank" >
          Full Code
          </a>
      </div>
    </div>
  );
}

export default Classes;
