import { FaTemperatureHalf} from "react-icons/fa6";
import { GiChemicalTank, GiImpactPoint, GiPoisonGas } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { RiWaterPercentLine } from "react-icons/ri";

const AirQualityDetails = () => {
  const details = [
    {
      icon: <FaTemperatureHalf className="text-5xl" />,
      label: "Temp",
      value: 25 ,
      unit: "°C"
    },
    {
      icon: <GiChemicalTank className="text-5xl" />,
      label: "H2S",
      value: 35,
      unit: "ppm"
    },
    {
      icon: <RiWaterPercentLine className="text-5xl" />,
      label: "Humity",
      value: 75,
      unit: "%"
    },
    {
      icon: <MdDateRange className="text-5xl" />,
      label: "Date",
      value: 5,
      unit: "Nov"
    },
    {
      icon: <GiPoisonGas className="text-5xl" />,
      label: "CO2",
      value: 40 ,
      unit: "ppm"
    },
    {
      icon: <GiImpactPoint className="text-5xl" />,
      label: "Presion",
      value: 100 ,
      unit: "torr"
    },
  ];
  return details
};

export default AirQualityDetails;
