/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Activities = ({ activities }) => {
  return (
    <div
      className="Activities"
      css={css`
        background-color: yellow;
        font-size: 26px;
        height: 180px;
      `}
    >
      <ul
        className="List"
        css={css`
          background-color: blue;
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
