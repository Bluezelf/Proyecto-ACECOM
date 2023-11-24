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
  let airquality = 25;
  let airQualityColorClass = getColorClass(airquality);
  let airQualityShadowClass = getShadowClass(airquality);

  return (
    <section className="hidden acBox col-span-1 flex-col lg:flex">
      <h1 className="acBox__title">AirQuality</h1>
      <div className="relative flex justify-center h-full items-center">
        <div className={`absolute flex flex-col items-center z-20 dark:text-acBox-dark ${airQualityColorClass}`}>
          <p className={`text-8xl font-extrabold tracking-wide`}>
            {airquality}
          </p>
          <p className="font-bold tracking-wider">ICA</p>
        </div>
        <div
          className={`flex absolute justify-center items-center ${airQualityShadowClass} rounded-full animate-spin-slow shadow-md bg-acSmoke w-60 h-60 dark:bg-acGray`}
        ></div>
      </div>
    </section>
  );
};

export default AirQuality;
