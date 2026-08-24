import { NavLink } from "react-router-dom";
import smallArrowLeft from "../../assets/images/icon/compact-left-arrow.png";
import smallArrowRight from "../../assets/images/icon/compact-right-arrow.png";
import SelfContainCarrousel from "./SelfContainCarrousel";

function CarrouselNewPage1({ item, index, setIndex, maxIndex, openLightbox }) {
  const project = item;

  const handleNextImage = () => {
    setIndex(index + 1 > maxIndex ? 0 : index + 1);
  };

  const handlePreviousImage = () => {
    setIndex(index - 1 < 0 ? maxIndex : index - 1);
  };

  return (
    <div className="carrouselNewPage">
      <div className="carrouselNewPage-images">
        {maxIndex !== 0 && (
          <button
            type="button"
            className="carrouselNewPage-arrow-button"
            onClick={handlePreviousImage}
            aria-label="Previous project"
          >
            <img
              className="carrouselNewPage-arrow"
              src={smallArrowLeft}
              alt=""
            />
          </button>
        )}

        <SelfContainCarrousel
          images={project.images}
          openLightbox={openLightbox}
        />

        {maxIndex !== 0 && (
          <button
            type="button"
            className="carrouselNewPage-arrow-button"
            onClick={handleNextImage}
            aria-label="Next project"
          >
            <img
              className="carrouselNewPage-arrow"
              src={smallArrowRight}
              alt=""
            />
          </button>
        )}
      </div>

      <div className="carrouselNewPage-desc">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>

      <NavLink to={project.navLink} className="carrouselNewPage-button">
        See more
      </NavLink>
    </div>
  );
}

export default CarrouselNewPage1;
