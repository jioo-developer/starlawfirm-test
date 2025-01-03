import { css } from "@emotion/react";
import { gridStylePropsType } from "./GridBox";
export const gridStyle = ({ width, height }: gridStylePropsType) => css`
  display: flex;
  width: ${typeof width === "number" ? `${width}px` : width};
  height: ${height}px;
  padding: 2em;
  box-sizing: border-box;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  @media all and (max-width: 1000px) {
    width: 100%;
  }
`;

export const secTopStyle = css`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 100;
  .office_title {
    height: 24px;
    margin: 0 0 0.5em 0;
    overflow-y: hidden;
    font-size: 0.9375rem;
    line-height: 1.5;
    font-weight: 500;
    color: #4e5968;
    opacity: 1;
    transition:
      opacity 0.3s ease,
      height 0.3s ease;
  }
  .office_ment {
    margin: 0 0 1em 0;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.35;
    color: #333d4b;
    width: 88%;
    opacity: 1;
    transition:
      font-size 0.3s ease,
      line-height 0.3s ease;

    @media all and (max-width: 760px) {
      font-size: 1.25rem;
      br {
        display: none;
      }
    }

    @media all and (max-width: 400px) {
      br {
        display: none;
      }
    }
  }

  .hidden_text {
    p {
      display: none;
    }
    span {
      display: none;
    }
  }

  .more_btn {
    display: block;
    width: 24px;
    height: 24px;
    background-image: url(/images/plus_btn.svg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &.active {
    .office_title {
      opacity: 0;
    }
    .office_ment {
      font-size: 1.733rem;
      line-height: 1.5;
    }

    .more_btn {
      display: none;
    }

    .close_btn {
      position: absolute;
      bottom: 35px;
      left: 7px;
      display: block;
      width: 24px;
      height: 24px;
      background-image: url(/images/close_btn.svg);
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 101;

      @media all and (max-width: 760px) {
        bottom: 5px;
      }
    }

    .hidden_text {
      p {
        display: block;
        font-size: 1.0625rem;
        font-weight: 500;
        line-height: 1.5;
        color: rgb(51, 61, 75);
        letter-spacing: -0.1px;
        transition: opacity 0.3s;
      }
      span {
        display: block;
        margin-top: 1.5em;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.5;
        color: rgb(49, 130, 246);
        transition:
          font-size 0.3s,
          line-height 0.3s;
      }
    }
  }
`;

export const background = (index: number) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(/images/sec05_image${index + 1}.webp);
  background-repeat: no repeat;
  background-size: cover;
  transition: background-image 0.3s;

  @media all and (max-width: 1000px) {
    background-position: center center;
  }

  &.active {
    filter: blur(58px);
    transform: scale(1.2);

    &::before {
      position: absolute;
      inset: 0px;
      content: "";
      background: rgba(255, 255, 255, 0.6);
    }
  }
`;
