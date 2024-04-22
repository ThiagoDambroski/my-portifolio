import React from "react";
import smallArrowLeft from "../../assets/images/icon/compact-left-arrow.png";
import smallArrowRight from "../../assets/images/icon/compact-right-arrow.png";
import { NavLink } from "react-router-dom";

function CarrouselNewPage1({ item, index, setIndex, maxIndex, openLightbox }) {
  const project = item;

  const handleNextImage = () => {
    if (index + 1 > maxIndex) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handlePreviuosImage = () => {
    if (index - 1 < 0) {
      setIndex(maxIndex);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <div className="carrouselNewPage">
        <div className="carrouselNewPage-images">
          <img
            className="carrouselNewPage-arrow"
            src={smallArrowLeft}
            onClick={() => handlePreviuosImage()}
          />
          {project.images.length >= 4 ? (
            <>
              <div className="carrouselNewPage-images-multi">
                <img
                  src={project.images[0]}
                  onClick={() => openLightbox(project.images[0])}
                />
                <img
                  src={project.images[1]}
                  onClick={() => openLightbox(project.images[1])}
                />
                <img
                  src={project.images[2]}
                  onClick={() => openLightbox(project.images[2])}
                />
                <img
                  src={project.images[3]}
                  onClick={() => openLightbox(project.images[3])}
                />
              </div>
            </>
          ) : (
            <>
              <img src={project.images[0]} />
            </>
          )}
          <img
            className="carrouselNewPage-arrow"
            src={smallArrowRight}
            onClick={() => handleNextImage()}
          />
        </div>
        <div className="carrouselNewPage-desc">
          <h2>{project.title}</h2>
          <p>{project.description} </p>
        </div>
        <NavLink to={project.navLink}>
          <button className="carrouselNewPage-button">See more</button>
        </NavLink>
      </div>
    </>
  );
}

export default CarrouselNewPage1;
