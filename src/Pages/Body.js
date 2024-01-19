import React from "react";
import { Route, Routes } from "react-router-dom";
import FlightsPage from "./FlightsPage";
import SearchFlightPage from "./SearchFlightPage";
import FlightReviewItineraryPage from "./FlightReviewItineraryPage";

const Body = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<FlightsPage />}/>
        <Route path="/searchflight" element={<SearchFlightPage />} />
        <Route path="/flightreviewitineray" element={<FlightReviewItineraryPage />} />
      </Routes>
    </div>
  );
};

export default Body;
