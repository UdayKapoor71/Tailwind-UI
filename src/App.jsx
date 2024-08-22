import "./App.css";
import { Navbar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <>
      <div className=" grid grid-cols-12">
        <SideBar />

        <Navbar />
      </div>
    </>
  );
}

export default App;
