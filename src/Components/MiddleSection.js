import React from "react";
import SearchFlightCard from "./SearchFlightCard";
import Arrow from "../Assets/Images/Arrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../Styles/MiddleSection.css";

const MiddleSection = () => {
  return (
    <div>
      <div className="middle-section">
        <div>
          <p className="card-heading">Search Flights</p>
          <p className="card-sub-title">Enjoy hassle free bookings with Cleartrip</p>
        </div>
        <SearchFlightCard icon={<FontAwesomeIcon icon={faArrowRight} />} />
        <div>
          <h1 className="popular-search">Popular Search</h1>
          <div className="cards">
            <div className="cards-data">
              <div className="card-innerdata">
                <span>Banglor to Goa</span>
                <br></br>
                <span style={{ color: "gray", fontSize: "12px" }}>
                  wed,8 Nov - Sat, 11 Nov
                </span>
              </div>
              <Arrow />
            </div>
            <div className="cards-data">
              <div className="card-innerdata">
                <span>Banglor to Goa</span>
                <br></br>
                <span style={{ color: "gray", fontSize: "12px" }}>
                  wed,8 Nov - Sat, 11 Nov
                </span>
              </div>
              <Arrow />
            </div>
            <div className="cards-data">
              <div className="card-innerdata">
                <span>Banglor to Goa</span>
                <br></br>
                <span style={{ color: "gray", fontSize: "12px" }}>
                  wed,8 Nov - Sat, 11 Nov
                </span>
              </div>
              <Arrow />
            </div>
            {/* <div className="cards-data">
              <div className="card-innerdata">
                <span>Banglor to Goa</span>
                <br></br>
                <span style={{ color: "gray", fontSize: "12px" }}>
                  wed,8 Nov - Sat, 11 Nov
                </span>
              </div>
              <Arrow />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
