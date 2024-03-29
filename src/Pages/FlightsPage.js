import React from "react";
import NavigationBar from "../Components/NavigationBar";
import LeftSideNavBar from "../Components/LeftSideNavBar";
import MiddleSection from "../Components/MiddleSection";
import Offer1 from "../Assets/Images/Offer1.webp";
import Offer2 from "../Assets/Images/Offer2.webp";
import Offer3 from "../Assets/Images/Offer3.webp";
import DataImage from "../Assets/Images/DataImage.webp";
import Goa from "../Assets/Images/Goa.jpg";
import Delhi from "../Assets/Images/Delhi.jpg";
import Banglore from "../Assets/Images/Bangalore.webp";
import Varanasi from "../Assets/Images/Varanasi.jpg";
import AbuDhabi from "../Assets/Images/AbuDhabi.jpg";
import RightSideCarouselSection from "../Components/RightSideCarouselSection";
import Footer from "../Components/Footer";
import "../Styles/FlightsPage.css";

const FlightsPage = () => {
  return (
    <div>
      <NavigationBar />
      <div style={{ display: "flex" }}>
        <LeftSideNavBar />
        <MiddleSection />
        <RightSideCarouselSection />
      </div>
      <div className="flightpage-offerimg">
        <img alt="Offer1" src={Offer1} />
        <img alt="Offer2" src={Offer2} />
        <img alt="Offer3" src={Offer3} />
      </div>
      <div className="flightpage-adfor-download">
        <img src={DataImage} />
      </div>
      <h2 className="popular-destination">Popular Destination</h2>
      <div className="flightpage-popular-destination">
        <img alt="Goa" src={Goa} />
        <img alt="Delhi" src={Delhi} />
        <img alt="Banglore" src={Banglore} />
        <img alt="Varanasi" src={Varanasi} />
        <img alt="AbuDhabi" src={AbuDhabi} />
      </div>
      <div className="flightpage-homepage-details"></div>
        <div>
          <h5 className="details-title-h5">
            Booking flights & hotels online with Cleartrip
          </h5>
          <p className="details-para-2">
            From queries to itineraries, for all things travel, there is
            Cleartrip. Checking your flight updates and PNR status is easy with
            our simple, intuitive app and booking site. Booking online hotels
            gets seamless with a range of choices and the greatest hotel deals.
          </p>
          <p className="details-para-2">
            Here’s why booking flights and hotels with Cleartrip is your Clear
            Advantage:
          </p>
          <p className="details-para-2">
            <b>CT Flexmax:</b> Reschedule or cancel your domestic flight booking
            for free up to 24 hours before departure.
          </p>
          <p className="details-para-2">
            <b>CT Flex:</b> Amend your domestic flight booking against your date
            of travel and choice of airline. Say hello to flexible flight
            bookings!
          </p>
          <p className="details-para-2">
            <b>Easy hotel cancellation:</b> Cancel your hotel stay easily. Zero
            fees on hotel cancellations up to 24 hours before check-in on 20k+
            hotels.
          </p>
          <p className="details-para-2">
            <b>Instant refund initiation:</b> All refunds on flight and hotel
            cancellations are initiated instantly.
          </p>
          <p className="details-para-2">
            <b>Medi-cancel refund:</b> Cancel your domestic flight booking
            easily on valid medical grounds and get up to ₹3500 against airline
            cancellation charges per passenger per segment.
          </p>
          <p className="details-para-2">
            <b>International travel insurance:</b> Cancel your domestic flight
            booking easily on valid medical grounds and get up to ₹3500 against
            airline cancellation charges per passenger per segment.
          </p>
          <p className="details-para-2">
            <b>
              Special Fares For Armed Personnel, Senior Citizens and Student
              travellers:
            </b>
            Cleartrip introduces discounted fares for armed personnel, senior
            citizens and students on domestic flights. Additional discounts with
            coupon codes.
          </p>
          <br></br>
          <h3 className="details-title">
            What are the best offers available for travel bookings on Cleartrip?
          </h3>
          <p className="details-para">
            Get the best offers on hotels and flights using bank cards such as
            HDFC, ICICI, Bank of Baroda, Federal Bank, etc. You can also grab
            amazing discounts during our exciting sale events. Apart from this,
            find unmissable deals and offers on hotel stays and flight bookings
            throughout the year.
          </p>
          <br></br>
          <h3 className="details-title">
            Are there any offers for new users on Cleartrip?
          </h3>
          <p className="details-para">
            Firsts are always special. So new users, you get FLAT 12% off on
            your airfare and up to 18% off on hotels using code
            <a href="/offers/india/dom-ctfirst">CTFIRST</a>. Cleartrip is here
            to make your <a href="/flights">online flight booking</a> seamless
            and simple.
          </p>
          <br></br>
          <h3 className="details-title">
            How can I find the best deals and discounts on flights and hotels
            online on Cleartrip?
          </h3>
          <p className="details-para">
            With Cleartrip, there are multiple deals available for your online
            flight and <a href="/hotels">hotel booking.</a> Whenever you select
            a hotel or a flight ticket, you can find the best available deals
            mentioned on the booking page. You can then use any of the available
            deals and coupon codes to avail your offer. Explore all
            <a href="/offers/india/domestic-flights">
              flight booking discount offers
            </a>
            & <a href="/offers/india/hotels">hotels booking discount offers</a>.
          </p>
          <br></br>
          <h3 className="details-title">
            Which is the best time to book flight tickets online?
          </h3>
          <p className="details-para">
            There’s no specific right time to book your travel. With Cleartrip,
            there are deals and offers available on online flight tickets all
            year round, to make your booking easy and affordable. However, there
            are many exciting sale events Cleartrip has that offer the best
            deals on travel such as Travel Maxx sale, #NoEndWeekend sale, Big
            Billion Days, Big Travel Sale, etc. Stay tuned and keep an eye on
            when the travel sales are and book hotels and flights online for the
            best price!
          </p>
        </div>
        <br></br>
      <Footer />
    </div>
  );
};

export default FlightsPage;
