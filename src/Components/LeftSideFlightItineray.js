import React from "react";
import ArrowItinerary from "../Assets/FlightReviewPage/ArrowItinerary";
import Flight6E from "../Assets/FlightReviewPage/Flight6E";
import Dottedline from "../Assets/FlightReviewPage/Dottedline";
import Clock from "../Assets/FlightReviewPage/Clock";
import AxisLogo from "../Assets/FlightReviewPage/AxisLogo";
import ArrivedPlan from "../Assets/FlightReviewPage/ArrivedPlan";
import CabinLogo from "../Assets/FlightReviewPage/CabinLogo";
import Cancel from "../Assets/FlightReviewPage/Cancel";
import Cancelticket from "../Assets/FlightReviewPage/Cancelticket";
import DateChange from "../Assets/FlightReviewPage/DateChange";
import DeparturedPlan from "../Assets/FlightReviewPage/DeparturedPlan";
import Dining from "../Assets/FlightReviewPage/Dining";
import DownArrow from "../Assets/FlightReviewPage/DownArrow";
import Laguage from "../Assets/FlightReviewPage/Laguage";
import mediCancelDTSvg from "../Assets/FlightReviewPage/mediCancelDTSvg.svg";
import PaidMeal from "../Assets/FlightReviewPage/PaidMeal";
import PaidSeat from "../Assets/FlightReviewPage/PaidSeat";
import Rupees from "../Assets/FlightReviewPage/Rupees";
import Seat from "../Assets/FlightReviewPage/Seat";
import "../Styles/FlightReviewItineraryPage.css";
import { useSelector } from "react-redux";

const LeftSideFlightItineray = () => {
  const bookNow = useSelector((e) => {
    return e.bookingData;
  })
  // console.log(bookNow?.bookNowReceivedData[0]);
  return (
    <>
      <div className="main-leftside-div">
        {/* heading-itinerary */}
        <div className="review-leftside">
          <div className="heading-itinerary">
            <div className="no-heading">1</div>
            <h2>Review Your Itinerary</h2>
          </div>

          <div className="flight-itinerary-data">
            {/* title */}
            <div className="flight-itinerary-title">
              <div className="flight-location">
                <span className="flight-location-span">{bookNow?.bookNowReceivedData[0].source}</span>
                <ArrowItinerary />
                <span className="flight-location-span">Mumbai</span>
              </div>
              <div>Wed,22 Nov 2023</div>
            </div>
            {/* flight details 1*/}
            <div className="flight-review-details">
              <div className="flight-name-details">
                <div>
                  <Flight6E />
                  <div>
                    <p className="name-details">IndiGo</p>
                  </div>
                  <div>
                    <p className="name-details">6E-578</p>
                    <p className="name-details">Econmy</p>
                  </div>
                </div>
                <div>
                  <Dottedline />
                </div>
              </div>
              <div className="flight-time-port-details">
                <div className="flight-port-details">
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    21:05
                  </span>
                  <span style={{ fontSize: "20px" }}>BLR</span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Kempegowda International Airport, Bangalore, Terminal 1
                  </span>
                </div>
                <div style={{ display: "flex", marginLeft: "5px" }}>
                  <Clock />
                  <span>1h 10m</span>
                </div>
                <div className="flight-port-details">
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    22:30
                  </span>
                  <span style={{ fontSize: "20px" }}>IXE</span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Bajpe, Mangalore, Terminal
                  </span>
                </div>
              </div>
            </div>

            {/* header layover */}
            <div className="layover-details">
              <span className="layover-location">
                Layover in Bajpe, Mangalore (IXE)
              </span>
              <span className="layover-time">Short layover 1h 15m</span>
            </div>
            {/* flight details 2 */}
            <div className="flight-itinerary-title">
              <div className="flight-location">
                <span className="flight-location-span">Mumbai</span>
                <ArrowItinerary />
                <span className="flight-location-span">Bangalore</span>
              </div>
              <div>Fri,26 Nov 2023</div>
            </div>
            <div className="flight-review-details">
              <div className="flight-name-details">
                <div>
                  <Flight6E />
                  <div>
                    <p className="name-details">IndiGo</p>
                  </div>
                  <div>
                    <p className="name-details">6E-578</p>
                    <p className="name-details">Econmy</p>
                  </div>
                </div>
                <div>
                  <Dottedline />
                </div>
              </div>
              <div className="flight-time-port-details">
                <div className="flight-port-details">
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    21:05
                  </span>
                  <span style={{ fontSize: "20px" }}>BLR</span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Kempegowda International Airport, Bangalore, Terminal 1
                  </span>
                </div>
                <div style={{ display: "flex", marginLeft: "5px" }}>
                  <Clock />
                  <span>1h 10m</span>
                </div>
                <div className="flight-port-details">
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    22:30
                  </span>
                  <span style={{ fontSize: "20px" }}>IXE</span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Bajpe, Mangalore, Terminal
                  </span>
                </div>
              </div>
            </div>
            {/* flight details 3*/}

            {/* <div className="flight-review-details">
              <div className="flight-name-details">
                <div>
                  <Flight6E />
                  <div>
                    <p className="name-details">IndiGo</p>
                  </div>
                  <div>
                    <p className="name-details">6E-578</p>
                    <p className="name-details">Econmy</p>
                  </div>
                </div>
                <div>
                  <Dottedline />
                </div>
              </div>
              <div className="flight-time-port-details">
                <div className="flight-port-details">
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    21:05
                  </span>
                  <span style={{ fontSize: "20px" }}>BLR</span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Kempegowda International Airport, Bangalore, Terminal 1
                  </span>
                </div>
                <div style={{ display: "flex", marginLeft: "5px" }}>
                  <Clock />
                  <span>1h 10m</span>
                </div>
                <div className="flight-port-details">
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    22:30
                  </span>
                  <span style={{ fontSize: "20px" }}>IXE</span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Bajpe, Mangalore, Terminal
                  </span>
                </div>
              </div>
            </div> */}

            {/* Axis bank card */}
            <div className="axisbank-card">
              <div className="axisbank-heading">
                <p>Exclusive on Axis Bank credit cards</p>
                <AxisLogo />
              </div>
              <hr></hr>
              <div className="axisbank-offer">
                <div style={{ display: "flex", gap: "70px" }}>
                  <div className="axisbank-offer-col-one">
                    <div className="travelling-guidedata-col">
                      <span>
                        <Rupees />
                      </span>
                      <span style={{ fontSize: "12px" }}>
                        No convenience Fee
                      </span>
                    </div>
                    <div className="travelling-guidedata-col">
                      <span>
                        <Seat />
                      </span>
                      <span style={{ fontSize: "12px" }}>
                        Free seat up to ₹700
                      </span>
                    </div>
                  </div>
                  <div className="axisbank-offer-col">
                    <div className="travelling-guidedata-col">
                      <span>
                        <Cancel />
                      </span>
                      <span style={{ fontSize: "12px" }}>
                        Free cancellation or date change at ₹1
                      </span>
                    </div>
                    <div className="travelling-guidedata-col">
                      <span>
                        <Dining />
                      </span>
                      <span style={{ fontSize: "12px" }}>
                        Free meal up to ₹350
                      </span>
                    </div>
                  </div>
                </div>
                <button className="axisbank-btn">Check your eligibility</button>
              </div>
            </div>

            {/* Accordion */}
            <div>
              <div className="aboveaccordion-title">
                <div className="flight-depature-details">
                  <div>
                    <DeparturedPlan />
                  </div>
                  <div className="port-name">
                    <div>BLR</div>
                    <div>→</div>
                    <div>BOM</div>
                  </div>
                  <div>: Standard fare</div>
                </div>
                <div className="flight-arried-details">
                  <div>
                    <ArrivedPlan />
                  </div>
                  <div className="port-name">
                    <div>BOM</div>
                    <div>→</div>
                    <div>BLR</div>
                  </div>
                  <div>: Standard fare</div>
                </div>
              </div>
              <div className="travelling-guidedata-card">
                <div className="travelling-guidedata">
                  <div>
                    <div className="travelling-guidedata-col">
                      <Cancelticket />
                      <div className="travelling-guidedata-text">
                        Cancellation fee starts from ₹3,900
                      </div>
                    </div>
                    <div className="travelling-guidedata-col">
                      <DateChange />
                      <div className="travelling-guidedata-text">
                        Date change allowed from ₹3,650
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="travelling-guidedata-col">
                      <CabinLogo />
                      <div className="travelling-guidedata-text">
                        Cabin/person: 7kg
                      </div>
                    </div>
                    <div className="travelling-guidedata-col">
                      <PaidMeal />
                      <div className="travelling-guidedata-text">Paid meal</div>
                    </div>
                  </div>
                  <div>
                    <div className="travelling-guidedata-col">
                      <Laguage />
                      <div className="travelling-guidedata-text">
                        Check-in/person: 15kg(1 Piece)
                      </div>
                    </div>
                    <div className="travelling-guidedata-col">
                      <PaidSeat />
                      <div className="travelling-guidedata-text">Paid seat</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <FlightReviewAccordion /> */}
            </div>

            {/* HR */}

            <hr
              style={{ width: "791px", marginLeft: "7.5rem", height: "0.5px" }}
            ></hr>

            {/* Medical */}

            <div className="refund">
              <div className="refund-inner">
                <div className="refund-inner-first">
                  <p style={{ fontSize: "16px", fontWeight: "500" }}>
                    This booking is covered by
                    <img src={mediCancelDTSvg} />
                  </p>
                  <p>
                    <span className="free">Free</span>
                    <span className="price">₹199</span>
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "300",
                    display: "flex",
                  }}
                >
                  <p>
                    Get a full refund on flight and hotel bookings for medical
                    reasons, only on Cleartrip.
                  </p>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#0f6bff",
                      cursor: "pointer",
                    }}
                  >
                    Learn More
                  </span>
                </p>
              </div>
              <div className="claimed-text">
                <p>
                  <span className="claimed-text-span">
                    2.5k travellers availed in last one month
                  </span>
                </p>
              </div>
            </div>

            {/* flipkart */}

            {/* btn */}
            <div className="continue">
              <button className="continue-btn">
                {/* onClick={handleContinueClick} */}
                Continue
              </button>
            </div>
          </div>
        </div>
        {/* <ChooseFlightseat /> */}
        {/* 2 */}

        <div className="review-leftside">
          <div className="heading-itinerary">
            <div className="no-heading">2</div>
            <div>
              <h2>Add Contact details</h2>
              <p style={{ fontSize: "12px" }}>
                E-tickets will be sent to this email address and phone number
              </p>
            </div>
          </div>
          <div className="additional-info-form">
            <label htmlFor="phoneNumber">Mobile Number:</label>
            <div className="mobile-card">
              <button className="number-btn">
                <div>+91</div>
                <DownArrow />
              </button>

              <input
                type="text"
                id="phoneNumber"
                className="mobile-number"
                placeholder="Mobile number"
              />
            </div>

            <div className="email-card">
              <label htmlFor="name">Email address</label>
              <input
                type="email"
                id="name"
                name="name"
                className="email"
                placeholder="Email address"
              />
            </div>
          </div>

          <div className="continue-second">
            <button className="continue-btn">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideFlightItineray;
