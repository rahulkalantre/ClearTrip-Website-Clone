import React from "react";
import { Route, Routes } from "react-router-dom";
import FlightsPage from "./FlightsPage";
import SearchFlightPage from "./SearchFlightPage";
import LeftSideFlightItineray from "../Components/LeftSideFlightItineray";

const Body = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<FlightsPage />}/>
        <Route path="/searchflight" element={<SearchFlightPage />} />
        <Route path="/reviewItineray" element={<LeftSideFlightItineray />} />
      </Routes>
    </div>
  );
};

export default Body;
