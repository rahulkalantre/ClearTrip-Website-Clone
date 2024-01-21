import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/TotalFlightDetails.css";
import UpArrow from "../Assets/Images/UpArrow";
import SearchFlightLogo from "../Assets/Images/SearchFlightLogo";
import { useNavigate } from "react-router-dom";
import { setValues } from "../Store/checkoutPageSlice";

const TotalFlightDetails = () => {
  const dispatch = useDispatch();
  const navigatePage = useNavigate();
  const [data, setData] = useState([]);
  const [returnData, setReturnData] = useState([]);
  const [leftSideClick, setLeftSideClick] = useState();
  const [rightSideClick, setRightSideClick] = useState();
  const [dataIndex, setDataIndex] = useState({
    rightClickIndex: 0,
    leftClickIndex: 0
  });

  const fetchApiData = useSelector((e) => {
    return e.filterData;
  });

  useEffect(() => {
    gatherData();
  }, [fetchApiData]);

  const gatherData = () => {
    const getData = fetchApiData.flightData;
    const getReturnData = fetchApiData.returnFlightData;
    setData(getData);
    setLeftSideClick(getData[0]);
    setRightSideClick(getReturnData[0]);
    setReturnData(getReturnData);
  };

  const handleLeftClick = (e, item) => {
    setDataIndex({...dataIndex, leftClickIndex: e})
    setLeftSideClick(item);
  };
  
  const handleRightClick = (e, item) => {
    setDataIndex({...dataIndex, rightClickIndex: e})
    setRightSideClick(item);
  };

  const handelBookNowClick = () => {
    // let allClickArray = [];
    // allClickArray.push(leftSideClick);
    // allClickArray.push(rightSideClick);

    dispatch(setValues([leftSideClick, rightSideClick]));
    navigatePage("/flightreviewitineray");
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
              <span className="book-flight-id">
                {leftSideClick?.flightID?.split("-")[0]}
              </span>
            </div>
            <div className="left-div book-departure-flight-time">
              <span>{leftSideClick?.departureTime}</span>
              <span className="place">{leftSideClick?.source}</span>
            </div>
            <div className="left-div">
              <span className="book-flight-duration">
                0{leftSideClick?.duration} hrs 00 m
              </span>
              <hr className="horizontal-line"></hr>
              <span className="book-flight-stop">
                0{leftSideClick?.stops} Stops
              </span>
            </div>
            <div className="right-div book-arrival-flight-time">
              <span>{leftSideClick?.arrivalTime}</span>
              <span className="book-place">{leftSideClick?.destination}</span>
            </div>
          </div>

          <div className="booked-right">
            <div className="right-div booked-logo">
              <span>
                <SearchFlightLogo />
              </span>
              <span className="booked-flight-id">
                {rightSideClick?.flightID?.split("-")[0]}
              </span>
            </div>
            <div className="right-div booked-departure-flight-time">
              <span>{rightSideClick?.departureTime}</span>
              <span className="place">{rightSideClick?.source}</span>
            </div>
            <div className="right-div">
              <span className="booked-flight-duration">
                0{rightSideClick?.duration} hrs 00 m
              </span>
              <hr className="horizontal-line"></hr>
              <span className="booked-flight-stop">
                0{rightSideClick?.stops} Stops
              </span>
            </div>
            <div className="right-div booked-arrival-flight-time">
              <span>{rightSideClick?.arrivalTime}</span>
              <span className="booked-place">{rightSideClick?.destination}</span>
            </div>
          </div>

          <div className="flight-price left-div">
              <span>
                ₹{leftSideClick?.ticketPrice + rightSideClick?.ticketPrice}
              </span>

            {/* <span
              style={{ color: "#51b12e", fontWeight: "600", fontSize: "10px" }}
            >
              Get ₹462 off with CTDOM
            </span> */}
          </div>
          <button className="flight-finaldata-btn" onClick={handelBookNowClick}>
            Book Now
          </button>
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
          {data.map((item, index) => (
            <div
              className={
                dataIndex.leftClickIndex == index
                  ? "final-flight-data selected-left"
                  : "final-flight-data"
              }
              onClick={() => handleLeftClick(index, item)}
              key={index}
            >
              <div className="left">
                <div className="left-div logo">
                  <span>
                    <SearchFlightLogo />
                  </span>
                  <span className="flight-id">
                    {item.flightID.split("-")[0]}
                  </span>
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
          {returnData.map((item, index) => (
            <div
              className={
                dataIndex.rightClickIndex == index
                  ? "final-flight-data selected-right"
                  : "final-flight-data"
              }
              onClick={() => handleRightClick(index, item)}
              key={index}
            >
              <div className="left">
                <div className="left-div logo">
                  <span>
                    <SearchFlightLogo />
                  </span>
                  <span className="flight-id">
                    {item.flightID.split("-")[0]}
                  </span>
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
