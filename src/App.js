import React, { useState } from "react";
import logo from "./img/logo.jpg";
import "./App.css";

const addActivity = () => {
  alert("test");
};

const Homepage = () => {
  return (
    <header className="Homepage">
      <img src={logo} className="Homepage" alt="logo" />
      <div className="container">
        <div className="left">
          <img src="screenshot" className="screenshot" alt="screenshot" />
        </div>
        <div className="right">
          <p>Log your daily activities</p>
          <button onClick={addActivity}>Start</button>
        </div>
      </div>
    </header>
  );
};

const AddActivity = () => {
  return <p>Add Activity</p>;
};

const App = () => {
  const [screen, setScreen] = useState("homepage");

  return (
    <div className="App">
      {screen === "homepage" && <Homepage />}
      {screen === "addActivity" && <AddActivity />}
    </div>
  );
};

export default App;
