import { useState } from "react";
import "./App.css";
import Sidebar from "./layouts/header/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesComponent from './routes/Index'
import TopMenu from "./layouts/header/TopMenu";

function App() {
  const pathname = window.location.pathname;
  const [comp, setComp] = useState("");
  const [color, setColor] = useState("white");
  const colors = ["white", "yellow", "red", "blue", "green"];

  // const renderButtons = (colors) => {
  //   return colors.map((color, index) => {
  //     return (
  //       <li
  //         key={index}
  //         className={"color-selector " + color}
  //         onClick={() => setColor(color)}
  //       ></li>
  //     );
  //   });
  // };
  console.log(pathname.replace("/", ""));

  return (
    <div className="App">
      <div>
        <TopMenu />
        <Sidebar />
      </div>
      {/* <div id="area" className={color}>
        {" "}
      </div>
      <div id="toolbox">{renderButtons(colors)}</div> */}
      <div className="App-content">
        <RoutesComponent />
      </div>
    </div>
  );
}

export default App;
