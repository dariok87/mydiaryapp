import React, { useState } from "react";

const AddActivity = ({ storeActivity }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const saveActivity = () => {
    storeActivity({ title, description });
  };

  return (
    <div className="AddActivity">
      <h1>Activity title</h1>
      <input onChange={e => setTitle(e.target.value)} />
      <h1>Activity description</h1>
      <textarea onChange={e => setDescription(e.target.value)}></textarea>
      <button onClick={saveActivity}>Save Activity</button>
    </div>
  );
};

export default AddActivity;
