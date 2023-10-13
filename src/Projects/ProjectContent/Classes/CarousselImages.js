import React, { useState } from 'react';
import './classes.css';
import ProjectArrowRight from '../../../assets/images/icon/project-right-arrow.png';
import ProjectArrowLeft from '../../../assets/images/icon/project-left-arrow.png';

function CarousselImages({ images, options }) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [arrowRightVisible, setArrowRightVisible] = useState(true);
  const [arrowLeftVisible, setArrowLeftVisible] = useState(false);

  const nextProject = () => {
    if(options === 1){
      if (index + 1 >= images.length) {
        setIndex(0);
       
      } else {
        setIndex(index + 1);
      }

    }else{
      if (index + 1 >= images.length - 1) {
        setArrowLeftVisible(true)
        setArrowRightVisible(false);
        setIndex(images.length - 1)
      } else {
        setIndex(index + 1);
        setArrowLeftVisible(true) 
        setArrowRightVisible(true);
      }
    }  
    
  };

  const previousProject = () => {
    if(options === 1){
      if (index - 1 < 0) {
        setIndex(images.length - 1);
      } else {
        setIndex(index - 1);
      }

    }else{
      if (index - 1 <= 0) {
        setArrowRightVisible(true)
        setArrowLeftVisible(false);
        setIndex(0)
      } else {
        setIndex(index - 1);
        setArrowRightVisible(true)
        setArrowLeftVisible(true);
      }
    }  
  };

  const openLightbox = () => {
    setLightboxOpen(true);
    document.body.classList.add('no-scroll');
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div className='caroussel-images'>
      {options === 1 && (
        <>
          <img src={ProjectArrowLeft} className='project-arrow' onClick={previousProject} alt='left-arrow'/>
          <img src={images[index]} className='code-img' onClick={openLightbox}  alt='code-image'/>
          <img src={ProjectArrowRight} className='project-arrow' onClick={nextProject} alt='right-arrow' />
        </>
      )}
      {options === 2 && (
        <>
          {arrowLeftVisible && (
            <img src={ProjectArrowLeft} className='project-arrow' onClick={previousProject}  alt='left-arrow'/>
          )}
          <img src={images[index]} className='code-img' onClick={openLightbox} alt='code-image'/>
          {arrowRightVisible && (
            <img src={ProjectArrowRight} className='project-arrow' onClick={nextProject} alt='right-arrow'/>
          )}
        </>
      )}

      {lightboxOpen && (
        <div className='lightbox'>
          {options === 1 && (
            <img src={ProjectArrowLeft} className='project-arrow' onClick={previousProject}  alt='left-arrow'/>
          )}
          {options === 2 && (
           <>
              {arrowLeftVisible && (
                <img src={ProjectArrowLeft} className='project-arrow' onClick={previousProject} alt='left-arrow'/>
              )}
           </>
          )}
          <span className='close-button' onClick={closeLightbox}>
            X
          </span>
          <div className='lightbox-content'>
            <img src={images[index]} className='lightbox-image' alt={`${index}`} />
          </div>

          {options === 1 && (
            <img src={ProjectArrowRight} className='project-arrow' onClick={nextProject} alt='right-arrow'/>
          )}
          {options === 2 && (
           <>
              {arrowRightVisible && (
                <img src={ProjectArrowRight} className='project-arrow' onClick={nextProject} alt='right-arrow'/>
              )}
           </>
          )}

        </div>
      )}
    </div>
  );
}

export default CarousselImages;
