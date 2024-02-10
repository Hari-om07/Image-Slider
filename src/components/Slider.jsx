// Slider.js
import React, { useState } from 'react';
import './styles4.css';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <img src={images[currentImageIndex]} alt="slide" />
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slider;
