import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/images/icon/next.png";
import gitHub from "../../assets/images/icon/programs icon/github-icon.png";
import smallLeftArrow from "../../assets/images/icon/small-left-arrow.png";
import smallRightArrow from "../../assets/images/icon/small-right-arrow.png";
import "./projectpage.css";

function ProjectPage({ item }) {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState({
    active: false,
    image: null,
  });

  const maxImage = item.images.length - 1;

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const changeToNext = () => {
    setActiveImage((currentImage) =>
      currentImage === maxImage ? 0 : currentImage + 1
    );
  };

  const changeToPrevious = () => {
    setActiveImage((currentImage) =>
      currentImage === 0 ? maxImage : currentImage - 1
    );
  };

  const openLightbox = (image) => {
    setLightboxOpen({ active: true, image });
    document.body.classList.add("no-scroll");
  };

  const closeLightbox = () => {
    setLightboxOpen({ active: false, image: null });
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="project-page">
      {lightboxOpen.active && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button
            type="button"
            className="close-button"
            onClick={closeLightbox}
            aria-label="Close image preview"
          >
            X
          </button>
          <div className="lightbox-content">
            <img
              src={lightboxOpen.image}
              className="lightbox-image"
              alt={`${item.title} preview`}
            />
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={goBack}
        className="back-button"
        aria-label="Go back"
      >
        <img src={backArrow} alt="" />
      </button>

      <div className="project-title">
        {item.gitLink && (
          <a href={item.gitLink} target="_blank" rel="noreferrer">
            <img src={gitHub} alt="GitHub" />
          </a>
        )}
        <h2>{item.title}</h2>
      </div>

      <div className="div-image">
        <div
          className="carousel-container-components"
          style={{ transform: `translateX(-${activeImage * 100}%)` }}
        >
          {item.images.map((image, index) => (
            <div key={image} className="carousel-item-components">
              <button
                type="button"
                className="project-carousel-control"
                onClick={changeToPrevious}
                aria-label="Previous project image"
              >
                <img src={smallLeftArrow} className="small-arrow" alt="" />
              </button>

              <button
                type="button"
                className="project-image-button"
                onClick={() => openLightbox(image)}
                aria-label={`Open ${item.title} image ${index + 1}`}
              >
                <img
                  src={image}
                  className="project-image"
                  alt={`${item.title} screenshot ${index + 1}`}
                />
              </button>

              <button
                type="button"
                className="project-carousel-control"
                onClick={changeToNext}
                aria-label="Next project image"
              >
                <img src={smallRightArrow} className="small-arrow" alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
