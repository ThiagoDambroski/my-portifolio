import React from "react";
import { useState } from "react";
import CarousselImages from "../Classes/CarousselImages";
//classes.css
function Components({ item }) {
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
      <a
        href={informationPage.siteLink}
        target="_blank"
        className="project-content-button"
      >
        View yourself
      </a>
      <div className="project-info">
        <p>{item.description}</p>
      </div>
      <div className="project-video">
        <h2>Video Showcases</h2>
        <iframe
          className="iframe"
          src={`https://www.youtube.com/embed/${item.youtubeID}`}
          title={item.videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <a href={item.gitLink} target="_blank" className="project-content-button">
        Full Code
      </a>
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
