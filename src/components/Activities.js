import React from "react";

const Activities = ({ activities }) => {
  return (
    <div className="Activities">
      <ul className="List">
        {activities.map((activity, index) => {
          return <li key={index}>{activity.title}</li>;
        })}
      </ul>

      <div className="Detail"></div>
    </div>
  );
};

export default Activities;
