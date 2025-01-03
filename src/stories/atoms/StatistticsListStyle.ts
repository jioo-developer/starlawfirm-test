import { css } from "@emotion/react";
export const UlStyle = (wrap: boolean, direction: "row" | "column") => css`
  display: flex;
  flex-wrap: ${wrap ? "wrap" : "nowrap"};
  flex-direction: ${direction};
  width: 100%;
  gap: 50px 0;
`;

export const LiStyle = (width: string | number) => css`
  width: ${typeof width === "string" ? width : width + "px"};
  @media all and (max-width: 760px) {
    width: 100%;
  }
  span {
    margin-bottom: 9px;
    font-size: 1.3125rem;
    /* 21px */
    font-stretch: normal;
    line-height: 1.5;
    color: rgb(176, 184, 193);
    letter-spacing: normal;
    word-break: keep-all;
  }

  p {
    font-size: 4rem;
    /* 64px */
    font-weight: bold;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    word-break: keep-all;
    color: #12141700;
    background: linear-gradient(to right, #fff, #fff) no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 0% 100%;
    transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 3.3s;

    @media all and (max-width: 760px) {
      font-size: 10vw;
    }

    &.active {
      background-size: 100% 100%;
    }
  }
`;
