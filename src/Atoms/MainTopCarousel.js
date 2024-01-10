import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "../Assets/SliderImages/Slider1.webp";
import Slider2 from "../Assets/SliderImages/Slider2.webp";
import Slider3 from "../Assets/SliderImages/Slider3.webp";
import Slider4 from "../Assets/SliderImages/Slider4.webp";
import Slider5 from "../Assets/SliderImages/Slider5.webp";
import Slider6 from "../Assets/SliderImages/Slider6.webp";
import "../Styles/MainTopCarousel.css";


const MainTopCarousel = () => {
  const totalSlides = 5;
  const interval = 3000;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [totalSlides, interval]);
  return (
    <div>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={100}
        emulateTouch={false}
        showIndicators={true}
        selectedItem={currentIndex}
        useKeyboardArrows={true}
        onChange={(index) => setCurrentIndex(index)}
        className="rightaside-carousel"
      >
        <div>
          <a>
            <img className="main-img" src={Slider1} alt="headerimage" />
          </a>
        </div>
        <div>
          <img className="" src={Slider2} alt="headerimage" />
        </div>
        <div>
          <img className="" src={Slider3} alt="headerimage" />
        </div>
        <div>
          <img className="" src={Slider4} alt="headerimage" />
        </div>
        <div>
          <img className="" src={Slider5} alt="headerimage" />
        </div>
        <div>
          <img className="" src={Slider6} alt="headerimage" />
        </div>
        <div>
          <img className="" src={Slider5} alt="headerimage" />
        </div>
        <div>
          <img className="" src={Slider6} alt="headerimage" />
        </div>
      </Carousel>
    </div>
  );
};

export default MainTopCarousel;
