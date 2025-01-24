import React from "react";
import { useState } from "react";
import { projectData } from "../../ProjectData";
import "./newPage1.css";
import CarrouselNewPage1 from "./CarrouselNewPage1";
import { NavLink } from "react-router-dom";
import TitleCode from "./TitleCode";


function NewPage1({ openLightbox }) {

  const backEndProjects = projectData.filter((item) => item.type === 1);
  const frontEndProjects = projectData.filter((item) => item.type === 2);
  const fullStackProjects = projectData.filter((item) => item.type === 3)

  const [indexFront, setIndexFront] = useState(0);
  const [indexBack, setIndexBack] = useState(0);
  const [indexFull,setIndexFull] = useState(0)

  return (
    <div className="newPage1-page">
      <NavLink to="/showCase">
        <button className="newPage1-all-projects-button">All projects</button>
      </NavLink>
      <div className="newPage1-front-end">
        <TitleCode
        text={"const FullStackProjects:projects"}
        lineNumber={1}
        />
      <div
          
        >
          {fullStackProjects.map((item) => (
            <div >
              <CarrouselNewPage1
                item={item}
                index={indexFull}
                setIndex={setIndexFull}
                maxIndex={fullStackProjects.length - 1}
                openLightbox={openLightbox}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="newPage1-front-end">
        <TitleCode
        text={"const FontEndProjects:projects"}
        lineNumber={2}
        />
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
        <TitleCode
        text={"const BackEndProjects:projects"}
        lineNumber={3}
        />
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
