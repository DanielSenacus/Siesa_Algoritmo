import React, { useEffect } from "react";
import Screen from "./Components/Screen";
import WallMenu from "./Components/WallMenu";
import ConsoleText from "./Components/ConsoleText";
import UseInput from "./Components/UseInput";
import "./custom.css";
import axios from "axios";

const App = () => {
  const getData = async (numerador, base) => {
    fetch(`/api/BaseK/${numerador}?k=${base}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Imprime "101"
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData(287, 4);
  }, []);
  return (
    <div>
      <div className='title'>
        <h1>Siesa Algorithm</h1>
      </div>
      <Screen></Screen>
      <WallMenu></WallMenu>
    </div>
  );
};

export default App;
