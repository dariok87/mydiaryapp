/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Activities = ({ activities }) => {
  return (
    <div
      className="Activities"
      css={css`
        background-color: yellow;
        font-size: 26px;
      `}
    >
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
