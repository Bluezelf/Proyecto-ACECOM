import {AcStats , AcTab} from "../custom/index"
import AirQualityDetails from "../../utils/AirQualityDetails";

const Details = () => {
  return (
    <section className="hidden md:flex acBox flex-col justify-between md:col-span-4 lg:col-span-1 lg:row-span-3">
      <h1 className="acBox__title lg:mb-4">Details</h1>
      <AcStats stats={AirQualityDetails()}/>
    </section>
  );
};

export default Details;
