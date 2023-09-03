import React, { useState } from "react";
import "./style.css";
import slide1 from "../../assets/image-slide-7.jpg";
import slide2 from "../../assets/image-slide-2.jpg";
import slide3 from "../../assets/image-slide-3.jpg";
import slide4 from "../../assets/image-slide-4.jpg";
import slide5 from "../../assets/image-slide-5.jpg";

const Carousel = () => {
  const images = [slide1, slide2, slide3, slide4, slide5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goBack = () => {
    const newIndex = currentIndex - 3;
    setCurrentIndex(newIndex < 0 ? 0 : newIndex);
  };

  const goForward = () => {
    const newIndex = currentIndex + 3;
    setCurrentIndex(newIndex >= images.length ? images.length - 3 : newIndex);
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="carousel">
      <div className="image-container">
        {visibleImages.map((image, index) => (
          <img key={index} src={image} alt="slide" />
        ))}
      </div>
      <div className="carousel_btn">
        <button onClick={goBack} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={goForward}
          disabled={currentIndex >= images.length - 3}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
