import React from "react";
import { useState } from "react";
import CarousselImages from "../Classes/CarousselImages";
import TitleCode from "../../../Home/Page1/TitleCode";
import gitIcon from "../../../assets/images/icon/contact icon/github.png"

//classes.css
function Components({ item}) {
  const informationPage = item.informationPage;
  /*
  const [isListVisible, setListVisible] = useState(
    Array(informationPage.components.length).fill(false)
  );
 
  const [backgroundActive, setBackGroundActive] = useState([]);

  const toggleList = (index) => {
    const updatedList = [...isListVisible];
    updatedList[index] = !updatedList[index];

    const updatedBackgroundActive = [...backgroundActive];
    const backgroundIndex = updatedBackgroundActive.indexOf(index);
    if (backgroundIndex !== -1) {
      updatedBackgroundActive.splice(backgroundIndex, 1);
    } else {
      updatedBackgroundActive.push(index);
    }

    setListVisible(updatedList);
    setBackGroundActive(updatedBackgroundActive);
  };
  */

  return (
    <div className="labels">
      {informationPage.siteLink && 
        <a
        href={informationPage.siteLink}
        target="_blank"
        className="project-content-button"
      >
        View yourself
      </a>
      }
      
      <div className="project-info">
        <p>{item.description}</p>
      </div>
      <div className="project-video">
        <div className="title-code-follow-up">
          <TitleCode
            text={"const VideoShowcase:video"}
          />
          <iframe
            className="iframe"
            src={`https://www.youtube.com/embed/${item.youtubeID}`}
            title={item.videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
      </div>
      {item.type !== 3 && 
        <div className="project-content-button-code" >
          <img src={gitIcon}/>
          <a href={item.gitLink} target="_blank" >
          Full Code
          </a>
        </div>
        
      }
      
      {/*
      <div className="center-title">
        <h1>Components:</h1>
      </div>

      {informationPage.components.map((item, index) => (
        <React.Fragment key={index}>
          <label
            onClick={() => toggleList(index)}
            className={
              backgroundActive && backgroundActive.includes(index)
                ? "class-label-backgorund"
                : "class-label"
            }
          >
            {item}
          </label>
          {isListVisible[index] && (
            <div className="method-table">
              <h2>Component:</h2>
              <div />
              <img
                src={informationPage.componentsImages[index][0]}
                className="componentImage"
              />
              <h2 style={{ marginBottom: "0px" }}>Code:</h2>
              {informationPage.componentsImages[index] && (
                <CarousselImages
                  images={informationPage.componentsImages[index].slice(1)}
                  options={2}
                />
              )}
            </div>
          )}
        </React.Fragment>
      ))}
      */}
    </div>
  );
}

export default Components;
