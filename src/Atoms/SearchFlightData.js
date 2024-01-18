import OfferCarousel from "../Atoms/OfferCarousel";
import ICICI from "../Assets/Images/ICICI";
import "../Styles/SearchFlightData.css";
import TotalFlightDetails from "../Components/TotalFlightDetails";

function SearchFlightData() {
  return (
    <div>
      <OfferCarousel
        icon={<ICICI />}
        offer={"Flat 12% off"}
        bankCard={"ICICICC"}
        card={"with ICICI Credit Cards"}
      />
      <TotalFlightDetails />
    </div>
  );
}

export default SearchFlightData;
