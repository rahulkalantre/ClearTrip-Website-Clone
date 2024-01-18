import React from "react";
import MainTopCarousel from "../Atoms/MainTopCarousel";
import MainOfferCarousel from "../Atoms/MainOffersCarousel";
import "../Styles/RightSideCarouselSection.css";

const RightSideCarouselSection = () => {
  return (
    <div>
      <div className="rightaside-sesction">
        <MainTopCarousel />
        <div className="rightaside-sesction-offers">
          <h4>More Offers</h4>
          <a>View all</a>
        </div>
        <MainOfferCarousel />
      </div>
    </div>
  );
};

export default RightSideCarouselSection;
