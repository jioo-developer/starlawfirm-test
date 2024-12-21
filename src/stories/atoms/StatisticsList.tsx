/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type propsType = {
  list: { label: string; value: string }[];
  width: number | string;
  wrap: boolean;
  direction?: "row" | "column";
};

const StatisticsList = ({
  list,
  width,
  wrap,
  direction = "row",
}: propsType) => {
  return (
    <ul css={UlStyle(wrap, direction)}>
      {list.map((item, index) => (
        <li key={index} css={LiStyle(width)}>
          <span>{item.label}</span>
          <p>{item.value}+</p>
        </li>
      ))}
    </ul>
  );
};

const UlStyle = (wrap: boolean, direction: "row" | "column") => css`
  display: flex;
  flex-wrap: ${wrap ? "wrap" : "nowrap"};
  flex-direction: ${direction};
  width: 100%;
  gap: 50px 0;
`;

const LiStyle = (width: string | number) => css`
  width: ${typeof width === "string" ? width : width + "px"};

  span {
    margin-bottom: 9px;
    font-size: 21px;
    font-stretch: normal;
    line-height: 26.29px;
    color: rgb(176, 184, 193);
    letter-spacing: normal;
    word-break: keep-all;
  }

  p {
    font-size: 64px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 80.13px;
    color: rgb(255, 255, 255);
    letter-spacing: normal;
    word-break: keep-all;
  }
`;

export default StatisticsList;
