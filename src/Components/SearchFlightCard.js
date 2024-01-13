import React, { useState } from "react";
import DeparturePlane from "../Assets/Flight/DeparturePlane";
import Transition from "../Assets/Flight/Transition";
import CalenderLogo from "../Assets/Flight/CalenderLogo";
import "../Styles/MiddleSection.css";
// import { GetApp } from "@mui/icons-material";
import axios from "axios";
import FlightCardCalendar from "./FilghtCardCalender";

const SearchFlightCard = () => {
  const [dayDeparture, setDayDeparture] = useState("");
  const [dayArrival, setDayArrival] = useState("");

  const [whereFromValue, setWhereToValue] = useState({});
  const stateFunction = (e) => {
    const { name, value } = e.target;
    let myValue = value.slice(0, 3);
    setWhereToValue({ ...whereFromValue, [name]: myValue });
  };
  console.log(whereFromValue);

  const fetchData = async () => {
    const data = await axios(
      `https://academics.newtonschool.co/api/v1/bookingportals/flight/?search={"source":"${whereFromValue.From}","destination":"${whereFromValue.To}"}&day=Mon`,
      { headers: { projectID: "uq9yiuh911bz" } }
    );
    console.log(data);
  };

  return (
    <div>
      <div className="middle-section-card">
        <div className="flightsearch-innerdata">
          <form className="search-from">
            {/* <span>{icon}</span> */}
            <select className="flightsearch-section">
              <option>One way</option>
              <option>Round trip</option>
            </select>
          </form>
          <div className="flightsearch-button">
            <button>Regular fare</button>
            <button>Student fare</button>
            <button>Senior citizen fare</button>
            <button>Armed forces fare</button>
          </div>
          <div className="flightsearch-search">
            <div className="departure-inputcard">
              <div className="departure-icon">
                <DeparturePlane />
              </div>
              <input
                placeholder="Where from?"
                onChange={stateFunction}
                className="search-input"
                list="browser"
                style={{ border: "0px", outline: "none" }}
                name="From"
              />
              <div>
                <div className="trasition">
                  <Transition />
                </div>
              </div>
              <div className="departure-icon">
                <DeparturePlane />
              </div>
              <input
                placeholder="Where To?"
                onChange={stateFunction}
                className="search-input"
                style={{ border: "0px", outline: "none" }}
                list="browser"
                name="To"
              />
              <datalist id="browser" style={{ marginLeft: "-55px" }}>
                <option
                  className="datalist-option"
                  value="BLR-Bangalore, IN - Kempegowda International Airport (BLR)"
                />
                <option value="BOM-Mumbai, IN - Chatrapati Shivaji Airport (BOM)" />
                <option value="DEL-New Delhi, IN - Indira Gandhi Airport (DEL)" />
                <option value="CCU-Kolkata, IN - Netaji Subhas Chandra Bose Airport (CCU)" />
                <option value="GOI-Goa, IN - Dabolim Airport (GOI)" />
              </datalist>
            </div>
          </div>
          <div className="flightsearch-search-calender">
            <div className="calender">
              <div className="choose-date">
                <div>
                  <CalenderLogo />
                </div>
                <div>
                  {/* Flight Calaender */}
                  <FlightCardCalendar
                    StartDay={(dayOfstart) => {
                      setDayDeparture(dayOfstart);
                    }}
                    EndDay={(dayOfEnd) => {
                      setDayArrival(dayOfEnd);
                    }}
                  />
                </div>
              </div>
            </div>
            <button className="search-btn" onClick={fetchData}>
              Search flights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFlightCard;
