import React, { useState } from "react";

const AddActivity = () => {
  const [title, setTitle] = useState("");

  const saveActivity = () => {};

  return (
    <div className="AddActivity">
      <h1>Activity title</h1>
      <input onChange={e => setTitle(e.target.value)} />
      <h1>Activity description</h1>
      <textarea></textarea>
      <button onClick={saveActivity}>Save Activity</button>
    </div>
  );
};

export default AddActivity;
