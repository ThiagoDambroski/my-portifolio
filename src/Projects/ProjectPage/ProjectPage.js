import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./projectpage.css";
import gitHub from "../../assets/images/icon/programs icon/github-icon.png";
import smallRightArrow from "../../assets/images/icon/small-right-arrow.png";
import smallLeftArrow from "../../assets/images/icon/small-left-arrow.png";
import backArrow from "../../assets/images/icon/next.png"

function ProjectPage({ item }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [ativeImage, setAtiveImage] = useState(0);
  const maxImage = item.images.length - 1;

  const changeToNext = () => {
    if (ativeImage === maxImage) {
      setAtiveImage(0);
    } else {
      setAtiveImage(ativeImage + 1);
    }
  };

  const changeToPrevious = () => {
    if (ativeImage === 0) {
      setAtiveImage(maxImage);
    } else {
      setAtiveImage(ativeImage - 1);
    }
  };

  const [lightboxOpen, setLightboxOpen] = useState({
    active: false,
    image: null,
  });

  const openLightbox = (image) => {
    setLightboxOpen({ active: true, image: image });
    document.body.classList.add("no-scroll");
  };

  const closeLightbox = () => {
    setLightboxOpen({ active: false, image: null });
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="project-page">
      {lightboxOpen.active && (
        <div className="lightbox">
          <span className="close-button" onClick={closeLightbox}>
            X
          </span>
          <div className="lightbox-content">
            <img src={lightboxOpen.image}  className="lightbox-image" />
          </div>
        </div>
      )}
      <img src={backArrow} onClick={goBack} className="back-button"/>
      <div className="project-title">
        <a href={item.gitLink} target="_blank">
          <img src={gitHub} />
        </a>
        <h2>{item.title}</h2>
      </div>

      <div className="div-image">
        <div
          className="carousel-container-components "
          style={{ transform: `translateX(-${ativeImage * 100}%)` }}
        >
          {item.images.map((image, i) => (
            <div key={i} className="carousel-item-components">
              <img
                src={smallLeftArrow}
                className="small-arrow"
                onClick={() => changeToPrevious()}
              />
              <img
                src={image}
                className="project-image"
                onClick={() => openLightbox(image)}
              />

              <img
                src={smallRightArrow}
                className="small-arrow"
                onClick={() => changeToNext()}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
