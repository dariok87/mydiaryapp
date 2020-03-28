import React, { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import AddActivity from "./components/AddActivity";
import { openDB } from "idb";

const storeActivity = async activity => {
  const dbName = "diary.lol";
  const storeName = "activities";
  const version = 1;

  const db = await openDB(dbName, version, {
    upgrade(db, oldVersion, newVersion, transaction) {
      const store = db.createObjectStore(storeName, { autoIncrement: true });
    }
  });
};

const App = () => {
  const [screen, setScreen] = useState("homepage");

  return (
    <div className="App">
      {screen === "homepage" && <Homepage setScreen={setScreen} />}
      {screen === "addActivity" && (
        <AddActivity storeActivity={storeActivity} />
      )}
    </div>
  );
};

export default App;
