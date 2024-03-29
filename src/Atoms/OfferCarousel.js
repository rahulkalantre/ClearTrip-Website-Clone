import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/OfferCarousel.css";

function OfferCarousel({ icon, offer, bankCard, card }) {
  const [settings] = useState({
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
  });

  return (
    <div style={{ height: "70px", width: "1000px", overflow: "hidden" }}>
      <Slider {...settings}>
        <div className="main-carousel-div">
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default OfferCarousel;
