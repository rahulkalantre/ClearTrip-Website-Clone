import React from "react";
import applogo from "../Assets/Images/AppLogo.png";
import Avatar from "../Assets/Images/AvatarLogo";
import LeftSideFlightItineary from "../Components/LeftSideFlightItineray";
import RightSideFlightItineary from "../Components/RightSideFlightItineary";
import "../Styles/FlightReviewItineraryPage.css";

const FlightReviewItineraryPage = () => {
  return (
    <div>
      <div className="review-navbar">
        <img src={applogo} alt="App Logo" width="100" height="30" />
        <div className="review">
          <p>
            <Avatar />
          </p>
          <p className="review-login">Log in</p>
        </div>
      </div>
      <hr className="hr-line"></hr>
      <div style={{ display: "flex", gap: "34px" }}>
        <LeftSideFlightItineary />
        {/* <RightSideFlightItineary /> */}
      </div>
    </div>
  );
};

export default FlightReviewItineraryPage;
