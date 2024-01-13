import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LogInPageImg1 from "../Assets/Images/Slider01.webp";
import LogInPageImg2 from "../Assets/Images/Slider02.webp";
import "../Styles/LoginPageCarousel.css";

const LoginPageCarousel = () => {
  const totalSlides = 2;
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
        centerSlidePercentage={90}
        emulateTouch={false}
        showIndicators={true}
        selectedItem={currentIndex}
        useKeyboardArrows={true}
        onChange={(index) => setCurrentIndex(index)}
        className="login-carousel"
      >
        <div>
          <a>
            <img
              className="login-carousel-img"
              src={LogInPageImg1}
              alt="headerimage"
            />
          </a>
        </div>
        <div>
          <img
            className="login-carousel-img"
            src={LogInPageImg2}
            alt="headerimage"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default LoginPageCarousel;
