import PropTypes from "prop-types";

const AcStats = ({ stats }) => {

  const getSuffix = (label) => {
    switch (label) {
      case "Temp":
        return "°C";
      case "H2S":
        return "ppm";
      case "Humity":
        return "%";
      case "Date":
        return "Nov";
      default:
        return "";
    }
  };

  return (
    <div className="hidden gap-8 lg:grid grid-cols-2 grid-rows-2 place-items-stretch h-full ">
      {stats.map((button, index) => (
        <button
          key={index}
          className={`flex flex-col items-center justify-between py-5 rounded-xl drop-shadow-lg bg-acSmoke dark:bg-acGray`}
        >
          <span className="text-xl flex justify-start">{button.label}</span>
          {button.icon}
          <span className="text-xl font-semibold flex justify-start">{button.value} {getSuffix(button.label)}</span>
        </button>
      ))}
    </div>
  );
};

AcStats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AcStats;
