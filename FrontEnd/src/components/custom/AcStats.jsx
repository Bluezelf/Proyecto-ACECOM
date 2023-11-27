import PropTypes from "prop-types";

const AcStats = ({ stats }) => {
  return (
    <div className="grid gap-5 md:grid-cols-6 lg:grid-cols-2 lg:place-items-stretch lg:h-full">
      {stats.map((stat, index) => (
        <button
          key={index}
          className={`flex flex-col font-semibold text-sm items-center gap-1 justify-between md:px-5 md:py-2 lg:px-0 lg:py-3 rounded-xl drop-shadow-lg bg-acSmoke dark:bg-acGray`}
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
