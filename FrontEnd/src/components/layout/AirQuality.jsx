function getColorClass(airquality) {
  if (airquality < 50) {
    return "text-acGreen";
  } else if (airquality < 100) {
    return "text-acYellow";
  } else {
    return "text-acRed";
  }
}

function getShadowClass(airquality) {
  if (airquality < 50) {
    return "shadow-acGreen";
  } else if (airquality < 100) {
    return "shadow-acYellow";
  } else {
    return "shadow-acRed";
  }
}

const AirQuality = () => {
  let airquality = 128;
  let colorClass = getColorClass(airquality);
  let shadowClass = getShadowClass(airquality);

  return (
    <section className="flex h-full lg:h-[70%] acBox col-span-1 flex-col md:row-span-2 lg:row-span-3">
      <h1 className="acBox__title">AirQuality</h1>
      <div className="relative flex justify-center h-full items-center">
        <p className={`text-7xl z-20 absolute font-bold tracking-wide ${colorClass} dark:text-acBox-dark`}>
          {airquality}
        </p>
        <p className="md:text-sm lg:text-xl font-bold absolute tracking-wider z-20 dark:text-acBox-dark bottom-1/3 md:bottom-1/3 lg:top-2/3">ICA</p>
        <div
          className={`flex absolute justify-center items-center ${shadowClass} rounded-full animate-spin-slow shadow-md bg-acSmoke w-60 h-60 md:w-0 lg:w-60 lg:h-60 dark:bg-acGray`}
        ></div>
      </div>
    </section>
  );
};

export default AirQuality;
