import { css } from "@emotion/react";

export const UlStyle = css`
  position: relative;
  font-size: 1.03em;
  font-weight: 100;
  line-height: 1.4em;
  list-style: none;
  border-radius: 2px;

  .active::before {
    color: rgb(255, 255, 255);
    transition: color 300ms;
  }

  .active::after {
    background: rgb(25, 31, 40);
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 4px;
    transition: box-shadow 300ms;
  }
`;

export const YearStyle = (year: number) => css`
  position: relative;
  height: 75px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  border-left: 2px solid rgb(51, 61, 75);

  &::before,
  &::after {
    position: absolute;
    top: 0px;
    display: block;
    cursor: pointer;
  }

  &::before {
    top: -10px;
    left: -78px;
    padding: 3px;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: bold;
    line-height: 25px;
    color: rgb(78, 89, 104);
    text-align: right;
    content: "${year}";
  }

  &::after {
    left: -7px;
    width: 12px;
    height: 12px;
    content: "";
    background-color: rgb(51, 61, 75);
    border-radius: 50%;
  }
`;
