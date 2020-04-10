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

        @media (max-width: 1000px) {
          grid-template-columns: 80px auto;
          grid-template-areas: "sidebar-mobile main";
        }
      `}
    >
      <ul
        className="List"
        css={css`
          grid-area: sidebar-desktop;
          border-right: 1px solid black;
          height: 100%;
          text-align: left;
          list-style-type: none;

          @media (max-width: 800px) {
            display: none;
          }
        `}
      >
        {activities.map((activity, index) => {
          return (
            <li
              key={index}
              css={css`
                padding: 20px;
                border-bottom: 1px solid black;
                &:hover {
                  background-color: lightgrey;
                  cursor: pointer;
              `}
            >
              {activity.title}
            </li>
          );
        })}
      </ul>

      <ul
        css={css`
          grid-area: sidebar-mobile;
          border-right: 1px solid black;
          height: 100%;
          text-align: left;
          list-style-type: none;

          @media (min-width: 800px) {
            display: none;
          }
        `}
      >
        <div id="menuToggle">
          <span
            css={css`
              display: block;
              width: 33px;
              height: 4px;
              margin-bottom: 5px;
              position: relative;
              background: #cdcdcd;
              border-radius: 3px;
              z-index: 1;
            `}
          ></span>
          <span
            css={css`
              display: block;
              width: 33px;
              height: 4px;
              margin-bottom: 5px;
              position: relative;
              background: #cdcdcd;
              border-radius: 3px;
              z-index: 1;
            `}
          ></span>
          <span
            css={css`
              display: block;
              width: 33px;
              height: 4px;
              margin-bottom: 5px;
              position: relative;
              background: #cdcdcd;
              border-radius: 3px;
              z-index: 1;
            `}
          ></span>
        </div>
      </ul>

      <div
        className="Detail"
        css={css`
          grid-area: main;
        `}
      ></div>
    </div>
  );
};

export default Activities;
