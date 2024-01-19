import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../Styles/SearchFlightsFliters.css";
import { useDispatch, useSelector } from "react-redux";
import { setValues } from "../Store/Slice";
import { setReturnValues } from "../Store/filterSlice";

const SearchFlightsFilters = () => {
  const dispatch = useDispatch();
  const [storeFetchedData, setStoreFetchedData] = useState([]);
  const [filters, setFilters] = useState({
    stop0: false,
    stop1: false,
    stop2: false,
  });
  const [departureTime, setDepartureTime] = useState({
    earlyMorning: false,
    morning: false,
    afternoon: false,
    evening: false,
    night: false,
  });
  // const [arrivalTime, setArrivalTime] = useState({
  //   earlyMorning: false,
  //   morning: false,
  //   afternoon: false,
  //   evening: false,
  //   night: false,
  // });

  const fetchApiData = useSelector((e) => {
    return e.data;
  });

  useEffect(() => {
    filterFlights();
  }, [filters, departureTime]);

  useEffect(() => {
    setStoreFetchedData(fetchApiData.flightData[0].data.data.flights);
    dispatch(setValues(fetchApiData.flightData[0].data.data.flights));
    dispatch(setReturnValues(fetchApiData.flightData[1].data.data.flights));
  }, []);

  const isDepartureTimeInRange = (departureTime) => {
    const departureDate = new Date(`2000-01-01 ${departureTime}`);
    const startRange = new Date(`2000-01-01 01:00`);
    const endRange = new Date(`2000-01-01 06:00`);

    return departureDate.getHours();
  };



  const filterFlights = () => {
    const filteredFlights = storeFetchedData.filter((flight) => {
      if (filters.stop0 && flight.stops === 0) return flight;
      if (filters.stop1 && flight.stops === 1) return flight;
      if (filters.stop2 && flight.stops === 2) return flight;
      if (
        filters.stop0 == false &&
        filters.stop1 == false &&
        filters.stop2 == false
      ) {
        return flight;
      }
      return null;
    });

    const flightTimeFilter = filteredFlights.filter((flight) => {
      const a = isDepartureTimeInRange(flight.departureTime);
      if (departureTime.earlyMorning && a > 0 && a < 8) {
        return flight;
      }
      if (departureTime.morning && a > 6 && a < 12) {
        return flight;
      }
      if (departureTime.afternoon && a > 12 && a < 16) {
        return flight;
      }
      if (departureTime.evening && a > 16 && a < 20) {
        return flight;
      }
      if (departureTime.night && a > 20 && a < 6) {
        return flight;
      }
      if (
        !departureTime.earlyMorning &&
        !departureTime.morning &&
        !departureTime.afternoon &&
        !departureTime.evening &&
        !departureTime.night
      ) {
        return flight;
      }
    });
    dispatch(setValues(flightTimeFilter));
  };

  const handleCheckboxChange = (checkboxName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [checkboxName]: !prevFilters[checkboxName],
    }));
  };

  const departureTimeChange = (departureTimeSlot) => {
    setDepartureTime((prevFilters) => ({
      ...prevFilters,
      [departureTimeSlot]: !prevFilters[departureTimeSlot],
    }));
  };

  return (
    <>
      <div className="searchflightpage-leftsection">
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <p>
            <b>Flights Filter</b>
          </p>
        </div>

        {/* 1st Filter - Stops */}
        <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">Stops</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <div className="checkbox-container">
                  <input
                    onChange={() => handleCheckboxChange("stop0")}
                    type="checkbox"
                    id="non-stop"
                    name="non-stop"
                    className="checkbox-input"
                    value="0"
                  />
                  <label htmlFor="non-stop" className="checkbox-label">
                    Non-Stop
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    onChange={() => handleCheckboxChange("stop1")}
                    type="checkbox"
                    className="checkbox-input"
                    id="stop-one"
                    name="non-stop"
                    value="1"
                  />
                  <label htmlFor="stop-one" className="checkbox-label">
                    1 Stop
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    onChange={() => handleCheckboxChange("stop2")}
                    type="checkbox"
                    className="checkbox-input"
                    id="stop-two"
                    name="non-stop"
                    value="2"
                  />
                  <label htmlFor="stop-two" className="checkbox-label">
                    2 Stops
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* 2nd Filter - Departure Time */}
        <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">Departure Time</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <div className="checkbox-container">
                  <input
                    onChange={() => departureTimeChange("earlyMorning")}
                    type="checkbox"
                    id="departuretime-morning"
                    name="early-morning"
                    value="MidNight-06:00"
                    className="checkbox-input"
                  />
                  <label htmlFor="morning" className="checkbox-label">
                    MidNight - 08:00
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    onChange={() => departureTimeChange("morning")}
                    type="checkbox"
                    id="departuretime-morning"
                    name="morning"
                    value="06:00-12:00"
                    className="checkbox-input"
                  />
                  <label htmlFor="morning" className="checkbox-label">
                    Morning 06:00 - 12:00
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    onChange={() => departureTimeChange("afternoon")}
                    type="checkbox"
                    id="departuretime-afternoon"
                    name="afternoon"
                    value="12:00-16:00"
                    className="checkbox-input"
                  />
                  <label htmlFor="afternoon" className="checkbox-label">
                    Afternoon 12:00 - 16:00
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    onChange={() => departureTimeChange("evening")}
                    type="checkbox"
                    id="departuretime-evening"
                    name="evening"
                    value="16:00-20:00"
                    className="checkbox-input"
                  />
                  <label htmlFor="evening" className="checkbox-label">
                    Evening 16:00 - 20:00
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    onChange={() => departureTimeChange("night")}
                    type="checkbox"
                    className="checkbox-input"
                    id="departuretime-night"
                    name="night"
                    value="20:00-06:00"
                  />
                  <label htmlFor="night" className="checkbox-label">
                    Night 20:00 - 06:00
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* 3rd Filter - Arrival Time */}
        <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">Arrival Time</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="arrivaltime-earlymorning"
                    name="arrivaltime-earlymorning"
                    value="24:00-8:00"
                    className="checkbox-input"
                  />
                  <label htmlFor="earlymorning" className="checkbox-label">
                    <div className="checkbox-label-gap">
                      <span>Early Morning</span>
                      <span style={{ marginLeft: "15px" }}>24:00-08:00</span>
                    </div>
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="arrivaltime-morning"
                    name="arrivaltime-morning"
                    value="08:00-12:00"
                    className="checkbox-input"
                  />
                  <label htmlFor="morning" className="checkbox-label">
                    <div className="checkbox-label-gap">
                      <span>Morning</span>
                      <span style={{ marginLeft: "15px" }}>08:00-12:00</span>
                    </div>
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="arrivaltime-afternoon"
                    name="arrivaltime-afternoon"
                    value="12:00-16:00"
                  />
                  <label htmlFor="afternoon" className="checkbox-label">
                    <div className="checkbox-label-gap">
                      <span>AfterNoon</span>
                      <span style={{ marginLeft: "15px" }}>12:00-16:00</span>
                    </div>
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="arrivaltime-evening"
                    name="arrivaltime-evening"
                    value="16:00-20:00"
                    className="checkbox-input"
                  />
                  <label htmlFor="evening" className="checkbox-label">
                    <div className="checkbox-label-gap">
                      <span>Evening</span>
                      <span style={{ marginLeft: "15px" }}>16:00-20:00</span>
                    </div>
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="arrivaltime-night"
                    name="arrivaltime-night"
                    value="08:00-24:00"
                  />
                  <label htmlFor="night" className="checkbox-label">
                    <div className="checkbox-label-gap">
                      <span>Night</span>
                      <span style={{ marginLeft: "15px" }}>08:00-24:00</span>
                    </div>
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* 4th Filter - One-Way Price */}
        <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">One-Way Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <label htmlFor="vol" className="range-title">
                  Up To
                </label>
                <br></br>
                <input
                  type="range"
                  id="vol"
                  name="vol"
                  min="3000"
                  max="6,834"
                  step="1"
                  className="range-input"
                />
                <div className="checkbox-label">
                  <span>₹3000</span>
                  <span style={{ marginLeft: "115px" }}>₹6,834</span>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* 5th Filter - Airlines */}
        <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">Airlines</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="earlymorning"
                    name="earlymorning"
                    value="earlymorning"
                    className="checkbox-input"
                  />
                  <label htmlFor="earlymorning" className="checkbox-label">
                    Show multi-airline itineraries
                  </label>
                </div>
                <hr />
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="morning"
                    name="morning"
                    value="morning"
                    className="checkbox-input"
                  />
                  <label htmlFor="morning" className="checkbox-label">
                    Air India
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="afternoon"
                    name="afternoon"
                    value="afternoon"
                  />
                  <label htmlFor="afternoon" className="checkbox-label">
                    Air India Express
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="evening"
                    name="evening"
                    value="evening"
                    className="checkbox-input"
                  />
                  <label htmlFor="evening" className="checkbox-label">
                    Akasa Air
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="night"
                    name="night"
                    value="night"
                  />
                  <label htmlFor="night" className="checkbox-label">
                    IndiGo
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="night"
                    name="night"
                    value="night"
                  />
                  <label htmlFor="night" className="checkbox-label">
                    SpiceJet
                  </label>
                </div>

                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="night"
                    name="night"
                    value="night"
                  />
                  <label htmlFor="night" className="checkbox-label">
                    Star Air
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="night"
                    name="night"
                    value="night"
                  />
                  <label htmlFor="night" className="checkbox-label">
                    Vistara
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* 6th Filter - Trip Duration */}
        <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">Trip Duration</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="duration-1"
                    name="duration"
                    value="1"
                    className="checkbox-input"
                  />
                  <label htmlFor="duration-1" className="checkbox-label">
                    1 Hr
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="duration-2"
                    name="duration"
                    value="2"
                    className="checkbox-input"
                  />
                  <label htmlFor="duration-2" className="checkbox-label">
                    2 Hr
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="duration-3"
                    name="duration"
                    value="3"
                    className="checkbox-input"
                  />
                  <label htmlFor="duration-3" className="checkbox-label">
                    3 Hr
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="duration-4"
                    name="duration"
                    value="4"
                    className="checkbox-input"
                  />
                  <label htmlFor="duration-4" className="checkbox-label">
                    4 Hr
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* 7th Filter - Layover Duration */}
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">
                Layover Duration
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="layover-duration"
                    name="layover-duration"
                    value="1"
                    className="checkbox-input"
                  />
                  <label htmlFor="layover-duration" className="checkbox-label">
                    1 Hr
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="layover-duration"
                    name="layover-duration"
                    value="2"
                    className="checkbox-input"
                  />
                  <label htmlFor="layover-duration" className="checkbox-label">
                    2 Hrs
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="layover-duration"
                    name="layover-duration"
                    value="3"
                    className="checkbox-input"
                  />
                  <label htmlFor="layover-duration" className="checkbox-label">
                    3 Hrs
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="layover-duration"
                    name="layover-duration"
                    value="4"
                    className="checkbox-input"
                  />
                  <label htmlFor="layover-duration" className="checkbox-label">
                    4 Hrs
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default SearchFlightsFilters;
