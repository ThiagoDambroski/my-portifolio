import React, { useState } from "react";
import HomePage from "./HomePage";
import About_me from "./About-me/About_me";
import NewPage1 from "./Page1/NewPage1";
import ContactMe from "./ContactMe/ContactMe";
import CoverLetter from "./CoverLetter/CoverLetter";
import imageTest from "../assets/images/background.jpg";

function Home({ resetScreen }) {
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
    <>
      <HomePage />
      <About_me />
      <NewPage1 openLightbox={openLightbox} />
      {/*<Page1 resetScreen={resetScreen} /> */}
      {/*<CoverLetter/>*/}

      {lightboxOpen.active && (
        <div className="lightbox">
          <span className="close-button" onClick={closeLightbox}>
            X
          </span>
          <div className="lightbox-content">
            <img src={lightboxOpen.image} className="lightbox-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
