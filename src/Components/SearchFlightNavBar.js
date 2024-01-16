import React from "react";
import { Hotel } from "@mui/icons-material";
import SearchFlightLogo from "../Assets/Images/SearchFlightLogo";
import SupportLogo from "../Assets/Images/SupportLogo";
import AvatarLogo from "../Assets/Images/AvatarLogo";
import AppLogo from "../Assets/Images/AppLogo.png";
import "../Styles/SearchFlightNavBar.css";

const SearchFlightNavBar = () => {
  return (
    <div>
      <div className="search-flights-navbar">
        <div className="leftside-searchflights-navbar">
          <img src={AppLogo} />
          <SearchFlightLogo />
          <Hotel style={{ color: "darkgray" }} />
        </div>
        <div className="rightside-searchflights-navbar">
          <div>INR Rs.</div>
          <div>
            <SupportLogo />
          </div>
          <div>Support</div>
          <div>
            <AvatarLogo />
          </div>
          <div>Log in</div>
        </div>
      </div>
      <div className="flights-search-boxs">
        <div className="flights-search-box">Round trip</div>
        <div className="flights-search-box">
          {/* <input type="text" /> */}
          BLR - Bangalore, IN
        </div>
        <div className="flights-search-box">BOM - Mumbai, IN</div>

        <div className="flights-search-box">Thu, Nov 16</div>
        <div className="flights-search-box">Thu, Nov 18</div>
        <div className="flights-search-box">1 Traveller</div>
        <button className="flights-search-button">Search</button>
      </div>
    </div>
  );
};

export default SearchFlightNavBar;
