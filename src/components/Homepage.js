import React from "react";
import logo from "./img/logo.jpg";

const Homepage = ({ setScreen }) => {
  const addActivity = () => {
    setScreen("addActivity");
  };

  return (
    <header className="Homepage">
      <img src={logo} className="Homepage" alt="logo" />
      <div className="container">
        <div className="left">
          <img src={screenshot} className="screenshot" alt="screenshot" />
        </div>
        <div className="right">
          <p>Log your daily activities</p>
          <button onClick={addActivity}>Start</button>
        </div>
      </div>
    </header>
  );
};

export default Homepage;
