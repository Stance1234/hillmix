import React, { useState } from 'react';

const images = [
  './img/slider/slide1.jpg',
  './img/slider/slide155.jpg',
  './img/slider/slide177.jpg'
];

const NewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <button onClick={prevSlide}>Previous</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default NewSlider;
