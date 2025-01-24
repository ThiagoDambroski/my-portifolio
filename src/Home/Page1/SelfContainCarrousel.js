import React, { useState, useEffect } from 'react';

function SelfContainCarrousel({ images, openLightbox }) {
  const [imageInFocus, setImageInFocus] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoMoving, setIsAutoMoving] = useState(true);


  useEffect(() => {
    if (isAutoMoving) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval); 
    }
  }, [isAutoMoving, images.length]);


  useEffect(() => {
    setImageInFocus(images[currentIndex]);
  }, [currentIndex, images]);

 
  const handleImageSelect = (index) => {
    setCurrentIndex(index);
    setIsAutoMoving(false); 
  };

  const openImage = () => {
    openLightbox(imageInFocus)
    setIsAutoMoving(false); 
  }

  return (
    <div className='selfContainCarrousel-div'>
      <img 
        src={imageInFocus} 
        className='selfContainCarrousel-img' 
        onClick={() => openImage()}
        alt='carousel'
      />
      <div className='circles-container'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`circle ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleImageSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default SelfContainCarrousel;
