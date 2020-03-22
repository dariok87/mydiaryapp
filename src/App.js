import React from "react";
import logo from "./img/logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="Homepage">
        <img src={logo} className="Homepage" alt="logo" />
        <div className="container">
          <div className="left">
            <img src="screenshot" className="screenshot" alt="screenshot" />
          </div>
          <div className="right">
            <p>Log your daily activities in this app!</p>
            <button>Start</button>
          </div>
        </div>
        <p>hello world!</p>
      </header>
    </div>
  );
}

export default App;
