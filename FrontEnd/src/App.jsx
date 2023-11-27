import { Details, Graphic, AirQuality} from "./components/layout"
import "./App.css";
import { AcDarkMode } from "./components/custom";

function App() {

  return (
    <>
      <main className="grid w-full h-screen items-center md:py-5 md:px-5 md:gap-5 md:grid-rows-3 md:grid-cols-4 lg:px-20 lg:py-0 lg:gap-12">
        <AcDarkMode/>
        <Details/>
        <Graphic/>
        <AirQuality/>
      </main>
    </>
  );
}

export default App;
