import { css } from "@emotion/react";
import { styleProps } from "./Button";

export const style = ({ width, height, fontSize }: styleProps) => css`
  width: ${width}px;

  height: ${height ? height + "px" : "auto"};
  outline: none;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: ${fontSize}px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;
