function getColorClass(airquality) {
  if (airquality < 50) {
    return "text-acGreen dark:shadow-md dark:shadow-acGreen";
  } else if (airquality < 100) {
    return "text-acYellow dark:shadow-md dark:shadow-acYellow";
  } else {
    return "text-acRed dark:shadow-md dark:shadow-acRed";
  }
}

const AirQuality = () => {

  let airquality = 25;
  let airQualityColorClass = getColorClass(airquality);

  return (
    <section className="hidden acBox col-span-1 flex-col lg:flex">
      <h1 className="acBox__title">AirQuality</h1>
      <div className="flex justify-center h-full items-center">
        <div className={`flex relative justify-center items-center ${airQualityColorClass} rounded-full bg-acSmoke shadow-xl w-60 h-60 dark:bg-acGray`}>
          <span
            className="text-8xl font-extrabold  tracking-wide dark:text-acBox-dark"
          >
            {airquality}
          </span>
          <span className="font-bold tracking-wider absolute top-2/3">ICA</span>
        </div>
      </div>
    </section>
  );
};

export default AirQuality;
