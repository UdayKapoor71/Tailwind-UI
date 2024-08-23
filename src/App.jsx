import "./App.css";
import { Navbar } from "./components/NavBar";
import { InformationAlert } from "./components/reuseable_components/InformationAlert";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <>
      <div className=" grid grid-cols-12">
        <SideBar />
        <Navbar />
        <InformationAlert />
      </div>
    </>
  );
}

export default App;
