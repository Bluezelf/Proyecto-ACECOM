import AcChart from "../custom/AcChart";

const Graphic = () => {
  return (
    <section className="hidden acBox flex-col grow col-span-2 lg:flex">
      <h1 className="acBox__title">Graphic</h1>
      <AcChart />
    </section>
  );
};

export default Graphic;
