import PropTypes from "prop-types";

const AcStats = ({ stats }) => {
  return (
    <div className="hidden gap-8 lg:grid grid-cols-2 grid-rows-2 place-items-stretch h-full">
      {stats.map((stat, index) => (
        <button
          key={index}
          className={`flex flex-col text-lg font-semibold items-center py-3 justify-between rounded-xl drop-shadow-lg bg-acSmoke dark:bg-acGray`}
        >
          <span>{stat.label}</span>
          <span>{stat.icon}</span>
          <span>{stat.value + " " + stat.unit}</span>
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
