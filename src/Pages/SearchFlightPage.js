import React from "react";
import SearchFlightNavBar from "../Components/SearchFlightNavBar";
import SearchFlightFilters from "../Components/SearchFlightFliters";
import FlightAllDetails from "../Components/FlightAllDetails";

const SearchFlightPage = () => {
  return (
    <div>
      <SearchFlightNavBar />
      <div style={{ display: "flex", marginTop: "20px" }}>
        <SearchFlightFilters />
        <FlightAllDetails />
      </div>
    </div>
  );
};

export default SearchFlightPage;