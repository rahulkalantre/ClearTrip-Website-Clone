import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../Styles/TotalFlightDetails.css";
import UpArrow from "../Assets/Images/UpArrow";
import SearchFlightLogo from "../Assets/Images/SearchFlightLogo";

const TotalFlightDetails = () => {
  const [data, setData] = useState([]);

  const fetchApiData = useSelector((e) => {
    return e.filterData;
  });

  useEffect(() => {
    gatherData();
  }, [fetchApiData]);

  const gatherData = () => {
    const getData = fetchApiData.flightData;
    setData(getData);
  };

  return (
    <div>
      <div className="flightsdata">
        <div className="flight-headings">
          <div className="flight-heading">
            <div className="left-flightsheadings">
              <span className="airlines-span">Airlines</span>
              <span className="departure-span">Departure</span>
              <span className="duration-span">Duration</span>
              <span className="arrival-span">Arrival</span>
            </div>
            <div className="right-flightsheadings">
              Price <UpArrow />
            </div>
          </div>
        </div>
        {data.map((item, index) => (
          <div className="final-flight-data" key={index}>
            <div className="left">
              <div className="left-div logo">
                <span>
                  <SearchFlightLogo />
                </span>
                <span className="flight-id">{item.flightID}</span>
                <div className="full-flights-details">
                  <a>Flights Details</a>
                </div>
              </div>
              <div className="left-div flight-time">
                <span>{item.departureTime}</span>
                <span className="place">{item.source}</span>
              </div>
              <div className="left-div">
                <span className="flight-duration">0{item.duration}.00 Hrs</span>
                <hr className="horizontal-line"></hr>
                <span className="flight-stop">0{item.stops} Stops</span>
              </div>
              <div className="left-div flight-time">
                <span>{item.arrivalTime}</span>
                <span className="place">{item.destination}</span>
              </div>
            </div>
            <div></div>
            <div className="flight-price left-div">
              ₹ {item.ticketPrice}
              <span
                style={{
                  color: "#51b12e",
                  fontWeight: "600",
                  fontSize: "10px",
                }}
              >
                Get ₹462 off with CTDOM
              </span>
            </div>
            <button className="flight-finaldata-btn">Book now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalFlightDetails;
