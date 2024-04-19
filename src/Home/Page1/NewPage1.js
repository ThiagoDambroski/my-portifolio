import React from "react";
import { useState } from "react";
import { projectData } from "../../ProjectData";
import "./newPage1.css";
import CarrouselNewPage1 from "./CarrouselNewPage1";

function NewPage1({ openLightbox }) {
  const backEndProjects = projectData.filter((item) => item.type === 1);
  const frontEndProjects = projectData.filter((item) => item.type === 2);

  const [indexFront, setIndexFront] = useState(0);
  const [indexBack, setIndexBack] = useState(0);

  return (
    <div className="newPage1-page">
      <button className="newPage1-all-projects-button">All projects</button>

      <div className="newPage1-front-end">
        <h1>Front End Projects</h1>
        <div
          className="carousel-container"
          style={{ transform: `translateX(-${indexFront * 100}%)` }}
        >
          {frontEndProjects.map((item) => (
            <div className="carousel-item">
              <CarrouselNewPage1
                item={item}
                index={indexFront}
                setIndex={setIndexFront}
                maxIndex={frontEndProjects.length - 1}
                openLightbox={openLightbox}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="newPage1-front-end">
        <h1>Back End Projects</h1>
        <div
          className="carousel-container"
          style={{ transform: `translateX(-${indexBack * 100}%)` }}
        >
          {backEndProjects.map((item) => (
            <div className="carousel-item">
              <CarrouselNewPage1
                item={item}
                index={indexBack}
                setIndex={setIndexBack}
                maxIndex={backEndProjects.length - 1}
                openLightbox={openLightbox}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  {
    /*<div className="carousel-container" style={{ transform: `translateX(-${index * 100}%)` }}>
        {employes.map((employee, i) => (
          <div key={i} className="carousel-item">
            <CarrouselAboutUs
              index={index}
              setIndex={setIndex}
            />
          </div>
        ))}
        </div> */
  }
}

export default NewPage1;
