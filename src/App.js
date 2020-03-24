import React, { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import AddActivity from "./components/AddActivity";

const AddActivity = () => {
  return <p>Add Activity</p>;
};

const App = () => {
  const [screen, setScreen] = useState("homepage");

  return (
    <div className="App">
      {screen === "homepage" && <Homepage setScreen={setScreen} />}
      {screen === "addActivity" && <AddActivity />}
    </div>
  );
};

export default App;
