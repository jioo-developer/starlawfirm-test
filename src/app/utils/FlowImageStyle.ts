import { css } from "@emotion/react";

export const flowWrap = css`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  .svg-container {
    display: block;

    .chart-line {
      fill: none;
      stroke: url(#gradient);
      stroke-dasharray: 2000;
      stroke-dashoffset: 2000;
      stroke-linecap: round;
      stroke-width: 2;
      transform: scale(1.01);
      animation: draw 2s linear 1s forwards;
    }
    .chart-fill {
      opacity: 0;
      fill: url(#gradient);
      transform: scale(1.01);
      animation: fill 2s linear 0.2s forwards;
    }

    .overlay-border {
      fill: none;
      stroke: rgba(49, 130, 246, 0.4);
      stroke-width: 3;
    }

    @keyframes draw {
      to {
        stroke-dashoffset: 0;
      }
    }

    @keyframes fill {
      to {
        opacity: 0.3;
      }
    }
  }
`;
