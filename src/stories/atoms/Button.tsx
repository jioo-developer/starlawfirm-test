/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { style } from "./ButtonStyle";

export type styleProps = {
  width: number;
  height: number;
  fontSize: number;
};

interface propsType extends styleProps {
  children: React.ReactNode;
  theme?: "white" | "success" | "primary";
  onClick?: () => void;
  disable?: boolean;
  className?: string;
}

export const Button = ({
  width,
  height,
  fontSize,
  theme = "white",
  children,
  disable,
  className,
  onClick,
}: propsType) => {
  return (
    <button
      css={[style({ width, height, fontSize }), themes[theme]]}
      disabled={disable ? true : false}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const themes = {
  white: css`
    background: transparent;
    color: #000;
    border: 1px solid #d1d1d1;
    box-sizing: border-box;
  `,
  success: css`
    background: #2ec998;
    color: #fff;
  `,
  primary: css`
    background: #1a74c3;
    color: #fefefe;
  `,
};
