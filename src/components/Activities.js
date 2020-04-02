/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Activities = ({ activities }) => {
  return (
    <div
      className="Activities"
      css={css`
        display: grid;
        grid-template-columns: 300px auto;
        width: 100vw;
        height: 100vh;
      `}
    >
      <ul
        className="List"
        css={css`
          border-right: 1px solid black;
          height: 100%;
        `}
      >
        {activities.map((activity, index) => {
          return <li key={index}>{activity.title}</li>;
        })}
      </ul>

      <div className="Detail"></div>
    </div>
  );
};

export default Activities;
