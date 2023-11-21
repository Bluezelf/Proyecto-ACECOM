import {AcStats , AcTab} from "../custom/index"
import AirQualityDetails from "../../utils/AirQualityDetails";

const Details = () => {
  return (
    <section className="flex acBox flex-col lg:col-span-1">
      <h1 className="acBox__title mb-8">Details</h1>
      <AcStats stats={AirQualityDetails()}/>
      <AcTab />
    </section>
  );
};

export default Details;
