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
    <>
      <div className="flightsdata">
        <div className="final-flight-book-data">
          <div className="book-left">
            <div className="left-div book-logo">
              <span>
                <SearchFlightLogo />
              </span>
              <span className="book-flight-id">flightID</span>
            </div>
            <div className="left-div book-departure-flight-time">
              <span>departureTime</span>
              <span className="place">source</span>
            </div>
            <div className="left-div">
              <span className="book-flight-duration">duration hr</span>
              <hr></hr>
              <span className="book-flight-stop">stop</span>
            </div>
            <div className="right-div book-arrival-flight-time">
              <span>arrivalTime</span>
              <span className="book-place">destination</span>
            </div>
          </div>

          <div>
            <div className="booked-right">
              <div className="right-div booked-logo">
                <span>
                  <SearchFlightLogo />
                </span>
                <span className="booked-flight-id">Flight id</span>
              </div>
              <div className="right-div booked-departure-flight-time">
                <span>Departure time</span>
                <span className="place">source</span>
              </div>
              <div className="right-div">
                <span className="booked-flight-duration">Duration hr</span>
                <hr></hr>
                <span className="booked-flight-stop">stop</span>
              </div>
              <div className="right-div booked-arrival-flight-time">
                <span>Arrival Time</span>
                <span className="booked-place">destination</span>
              </div>
            </div>
          </div>

          <div className="flight-price left-div">
            <span>T. Price</span>
            <span
              style={{ color: "#51b12e", fontWeight: "600", fontSize: "10px" }}
            >
              Get ₹462 off with CTDOM
            </span>
          </div>
          <button className="flight-finaldata-btn">Book now</button>
        </div>
        <div className="full-flights-details">
          <a>Flights details</a>
        </div>
      </div>

      <div className="flight-heading-main-div">
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

      <div className="total-main-div">
        <div className="flightsdata">
          <div className="flight-headings"></div>
          {data.map((item, index) => (
            <div className="final-flight-data">
              <div className="left">
                <div className="left-div logo">
                  <span>
                    <SearchFlightLogo />
                  </span>
                  <span className="flight-id">{item.flightID}</span>
                  {/* <div className="full-flights-details">
                  <a>Flights Details</a>
                </div> */}
                </div>
                <div className="left-div departure-flight-time">
                  <span>{item.departureTime}</span>
                  <span className="place">{item.source}</span>
                </div>
                <div className="left-div">
                  <span className="flight-duration">
                    0{item.duration} hrs 00 m
                  </span>
                  <hr className="horizontal-line"></hr>
                  <span className="flight-stop">0{item.stops} Stops</span>
                </div>
                <div className="left-div arrival-flight-time">
                  <span>{item.arrivalTime}</span>
                  <span className="place">{item.destination}</span>
                </div>
              </div>
              <div className="flight-price left-div">₹ {item.ticketPrice}</div>
            </div>
          ))}
        </div>

        <div className="flightsdata">
          <div className="flight-headings"></div>
          {data.map((item, index) => (
            <div className="final-flight-data">
              <div className="left">
                <div className="left-div logo">
                  <span>
                    <SearchFlightLogo />
                  </span>
                  <span className="flight-id">{item.flightID}</span>
                </div>
                <div className="left-div departure-flight-time">
                  <span>{item.departureTime}</span>
                  <span className="place">{item.source}</span>
                </div>
                <div className="left-div">
                  <span className="flight-duration">
                    0{item.duration} hrs 00 m
                  </span>
                  <hr className="horizontal-line"></hr>
                  <span className="flight-stop">0{item.stops} Stops</span>
                </div>
                <div className="left-div arrival-flight-time">
                  <span>{item.arrivalTime}</span>
                  <span className="place">{item.destination}</span>
                </div>
              </div>
              <div className="flight-price left-div">₹ {item.ticketPrice}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TotalFlightDetails;
