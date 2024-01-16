import React from "react";
import SearchFlightNavBar from "../Components/SearchFlightNavBar";
import SearchFlightFilters from "../Components/SearchFlightFliters";
import SearchFlightData from "../Components/SearchFlightData";

const SearchFlightPage = () => {
  return (
    <div>
      <SearchFlightNavBar />
      <div style={{ display: "flex", marginTop: "20px" }}>
        <SearchFlightFilters />
        <SearchFlightData />
      </div>
    </div>
  );
};

export default SearchFlightPage;
