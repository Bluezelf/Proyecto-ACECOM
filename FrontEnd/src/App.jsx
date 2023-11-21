import { Details, Graphic, AirQuality} from "./components/layout"
import "./App.css";
import { AcDarkMode } from "./components/custom";

function App() {

  return (
    <>
      <main className="flex w-full h-screen items-center lg:px-20 lg:grid lg:grid-cols-4 lg:gap-12">
        <AcDarkMode/>
        <Details/>
        <Graphic/>
        <AirQuality/>
      </main>
    </>
  );
}

export default App;
