/** @jsxImportSource @emotion/react */
"use client";
import { useScrollStore } from "@/app/store/common";
import { LiStyle, UlStyle } from "./StatistticsListStyle";

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

export default StatisticsList;
