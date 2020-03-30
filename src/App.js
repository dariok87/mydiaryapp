import React, { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import AddActivity from "./components/AddActivity";
import { openDB } from "idb";
import Activities from "./components/Activities";

const activities = [];

const initDatabase = async () => {
  const dbName = "diary.lol";
  const storeName = "activities";
  const version = 1;

  const db = await openDB(dbName, version, {
    upgrade(db, oldVersion, newVersion, transaction) {
      db.createObjectStore(storeName, { autoIncrement: true });
    }
  });
  return db;
};

const storeActivity = async activity => {
  const dbName = "diary.lol";
  const storeName = "activities";
  const version = 1;

  const db = await openDB(dbName, version, {
    upgrade(db, oldVersion, newVersion, transaction) {
      db.createObjectStore(storeName, { autoIncrement: true });
    }
  });

  const tx = await db.transaction(storeName, "readwrite");
  const store = await tx.objectStore(storeName);

  await store.put(activity);
  await tx.done;
};

const App = () => {
  const [screen, setScreen] = useState("homepage");

  return (
    <div className="App">
      {screen === "homepage" && <Homepage setScreen={setScreen} />}
      {screen === "addActivity" && (
        <AddActivity storeActivity={storeActivity} />
      )}
      {screen === "activities" && <Activities activities={activities} />}
    </div>
  );
};

export default App;
