import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../assets/image-slide-2.jpg";
import slide2 from "../../assets/image-slide-3.jpg";
import slide3 from "../../assets/image-slide-4.jpg";
import slide4 from "../../assets/image-slide-5.jpg";
import slide5 from "../../assets/image-slide-7.jpg";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import arrowRight from "../../assets/icon-arrow-right.svg";

// Other imports and styles...

const CenterModeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const next = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const prev = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };
  const createCarouselItemImage = (index, options = {}) => (
    <div key={index} className="img-container">
      <img
        src={index}
        alt="carousel"
        style={{
          maxWidth: "100%", // Set maximum width to ensure responsiveness
          maxHeight: "100%", // Set maximum height to ensure responsiveness
          objectFit: "cover", // Set how the image is fitted inside the container
        }}
      />
    </div>
  );

  const getConfigurableProps = () => ({
    showStatus: false,
    showIndicators: false,
    showArrows: false,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: false,
    thumbWidth: 100,
    selectedItem: 0,
    interval: 2000,
    transitionTime: 500,
    swipeScrollTolerance: 5,
  });

  const baseChildren = (
    <div>
      {[slide1, slide2, slide3, slide4, slide5].map(createCarouselItemImage)}
    </div>
  );

  return (
    <div className="container">
      <Carousel
        autoPlay={autoPlay}
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
        centerMode={true} // Enable center mode
        centerSlidePercentage={80} // Adjust center slide percentage as needed
        {...getConfigurableProps()}
      >
        {/* Add your carousel items here */}
        {baseChildren.props.children}
      </Carousel>
      <div className="buttons">
        <button onClick={prev} className="button">
          <img src={arrowLeft} alt="left" />
        </button>
        <button onClick={next} className="button">
          <img src={arrowRight} alt="right" />
        </button>
      </div>
    </div>
  );
};

export default CenterModeCarousel;
