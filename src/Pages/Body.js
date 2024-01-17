import React from "react";
import { Route, Routes } from "react-router-dom";
import FlightsPage from "./FlightsPage";
import SearchFlightPage from "./SearchFlightPage";

const Body = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<FlightsPage />}/>
        <Route path="/searchflight" element={<SearchFlightPage />} />
      </Routes>
    </div>
  );
};

export default Body;