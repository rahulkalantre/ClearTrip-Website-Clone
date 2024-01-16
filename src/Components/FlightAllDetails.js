import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValues } from "../Store/Slice";
import UpArrow from "../Assets/Images/UpArrow";
import SearchFlightLogo from "../Assets/Images/SearchFlightLogo";
import "../Styles/FlightAllDetails.css";

const FlightAllDetails = () => {
  const [sendData, setSendData] = useState({ arrival: {}, departure: {} });
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
  // console.log("Without UesEffect:", receivedData);

  const selectFlightCard = (e, index) => {
    index % 2 == 0
      ? setSendData({ ...sendData, departure: e })
      : setSendData({ ...sendData, arrival: e });
  };
  return (
    <div>
      <div className="flightsdata">
        <div className="final-flight-data">
          <div className="left">
            <div className="left-div logo">
              <span>
                <SearchFlightLogo />
              </span>
              <span className="flight-id">{sendData.departure.flightID}</span>
            </div>
            <div className="left-div flight-time">
              <span>{sendData.departure.departureTime}</span>
              <span className="place">{sendData.departure.source}</span>
            </div>
            <div className="left-div">
              <span className="flight-duration">
                {sendData.departure.duration} hr
              </span>
              <hr></hr>
              <span className="flight-stop">
                {sendData.departure.stops} Stops
              </span>
            </div>
            <div className="left-div flight-time">
              <span>{sendData.departure.arrivalTime}</span>
              <span className="place">{sendData.departure.destination}</span>
            </div>
          </div>

          {/* Right Side Card */}
          <div>
            <div className="left">
              <div className="left-div logo">
                <span>
                  <SearchFlightLogo />
                </span>
                <span className="flight-id">{sendData.arrival.flightID}</span>
              </div>
              <div className="left-div flight-time">
                <span>{sendData.arrival.departureTime}</span>
                <span className="place">{sendData.arrival.source}</span>
              </div>
              <div className="left-div">
                <span className="flight-duration">
                  {sendData.arrival.duration} hr
                </span>
                <hr></hr>
                <span className="flight-stop">
                  {sendData.arrival.stops} Stops
                </span>
              </div>
              <div className="left-div flight-time">
                <span>{sendData.arrival.arrivalTime}</span>
                <span className="place">{sendData.arrival.destination}</span>
              </div>
            </div>
          </div>

          <div className="flight-price left-div">
            <span>
              {sendData.arrival.ticketPrice + sendData.departure.ticketPrice}
            </span>
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

      <div className="flight-headings">
        <div className="flight-heading">
          <div className="left-flightsheadings">
            <span>Airlines</span>
            <span>Departure</span>
            <span>Duration</span>
          </div>
          <div className="right-flightsheadings">
            Price
            <UpArrow />
          </div>
        </div>
        <div className="flight-heading">
          <div className="left-flightsheadings">
            <span>Airlines</span>
            <span>Departure</span>
            <span>Duration</span>
          </div>
          <div className="right-flightsheadings">
            Price
            <UpArrow />
          </div>
        </div>
      </div>

      <div className="flight-data">
        {/* Left Side  */}
        {data.map((item, index) => (
          <div
            className="leftside-flight-data"
            onClick={() => {
              selectFlightCard(item, index);
            }}
          >
            <div>
              <div className="logo">
                <SearchFlightLogo />
                <p className="flight-id">{item.flightID}</p>
              </div>
              <div className="middle-flight-data">
                <div className="source-and-time">
                  <span className="flight-time">{item.departureTime}</span>
                  <span className="place">{item.source}</span>
                </div>
                <div>
                  <span className="flight-duration">{item.duration} Hrs</span>
                  <hr></hr>
                  <span className="flight-stop">{item.stops}Stops</span>
                </div>
                <div className="arrival-and-time">
                  <span className="flight-time">{item.arrivalTime}</span>
                  <span className="place">{item.destination}</span>
                </div>
              </div>
              <div className="flight-price">₹ {item.ticketPrice}</div>
            </div>
          </div>
        ))}

        {/* Right Side */}
        {/* {fetchApiData.flightData.data.data.flights.map((item) => (
          <div className="rightside-flight-data">
            <div className="right-flight-card">
              <div className="logo">
                <SearchFlightLogo />
                <p className="flight-id">{item.flightID}</p>
              </div>
              <div className="middle-flight-data">
                <div className="source-and-time">
                  <span className="flight-time">Dep</span>
                  <span className="place">Departure City</span>
                </div>
                <div>
                  <span className="flight-duration">Total Time hr 00m</span>
                  <hr></hr>
                  <span className="flight-stop">Stops</span>
                </div>
                <div className="arrival-and-time">
                  <span className="flight-time">{item.arrivalTime}</span>
                  <span className="place">Arrival City</span>
                </div>
              </div>
              <div className="flight-price">₹ Price</div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default FlightAllDetails;
