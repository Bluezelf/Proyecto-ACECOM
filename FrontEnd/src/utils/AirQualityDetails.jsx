import { FaTemperatureHalf} from "react-icons/fa6";
import { GiChemicalTank } from "react-icons/gi";
import { BsCalendar3 } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";

const AirQualityDetails = () => {
  const details = [
    {
      icon: <FaTemperatureHalf className="text-6xl" />,
      label: "Temp",
      value: 25 ,
      unit: "°C"
    },
    {
      icon: <GiChemicalTank className="text-6xl" />,
      label: "H2S",
      value: 35,
      unit: "ppm"
    },
    {
      icon: <IoWaterOutline className="text-6xl" />,
      label: "Humity",
      value: 75,
      unit: "%"
    },
    {
      icon: <BsCalendar3 className="text-6xl" />,
      label: "Date",
      value: 5,
      unit: "Nov"
    },
  ];
  return details
};

export default AirQualityDetails;
