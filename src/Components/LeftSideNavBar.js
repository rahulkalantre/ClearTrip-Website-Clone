import React from "react";
import '../Styles/LeftSideNavBar.css';
import NavFlightLogo from "../Assets/SvgLogo/NavFlightLogo";
import NavHotelLogo from "../Assets/SvgLogo/NavHotelLogo";
import NavBusLogo from "../Assets/SvgLogo/NavBusLogo";
import NavMyTripsLogo from "../Assets/SvgLogo/NavMyTripsLogo";
import NavSupportLogo from "../Assets/SvgLogo/NavSupportLogo";

const LeftSideNavBar = () => {
  return (
    <div>
      <aside>
        <div className="left-aside">
          <div className="left-aside-bar">
            <NavFlightLogo />
            <span className="nav-bar-menu">Flights</span>
          </div>
          <div className="left-aside-bar">
            <NavHotelLogo />
            <span className="nav-bar-menu">Hotel</span>
          </div>
          <div className="left-aside-bar">
            <NavBusLogo />
            <span className="nav-bar-menu">Bus</span>
          </div>
          <div className="left-aside-bar">
            <NavMyTripsLogo />
            <span className="nav-bar-menu">My Trips</span>
          </div>
          <div className="left-aside-bar">
            <NavSupportLogo />
            <span className="nav-bar-menu">Support</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default LeftSideNavBar;
