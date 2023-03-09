import React from "react";
import data from "./data.json";
import "./App.css";
import Statistics from "./components/Statistics";
const App = () => {
  return (
    <div>
      <Statistics statistics={data} />
    </div>
  );
};

export default App;
