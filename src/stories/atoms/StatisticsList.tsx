/** @jsxImportSource @emotion/react */
"use client";
import { useScrollStore } from "@/app/store/common";
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
  const scroll = useScrollStore().scroll;
  return (
    <ul css={UlStyle(wrap, direction)}>
      {list.map((item, index) => (
        <li key={index} css={LiStyle(width)}>
          <span>{item.label}</span>
          <p className={scroll > 500 ? "active" : ""}>{item.value}+</p>
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
    letter-spacing: normal;
    word-break: keep-all;
    color: #12141700;
    background: linear-gradient(to right, #fff, #fff) no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 0% 100%;
    transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 3.3s;

    &.active {
      background-size: 100% 100%;
    }
  }
`;

export default StatisticsList;
