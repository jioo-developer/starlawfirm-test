/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import {
  Data,
  historyDataType,
} from "@/stories/atoms/HistoryList/vertical/historyData";
import { useState } from "react";
import HorizontalList from "@/stories/atoms/HistoryList/horizontal/HorizontalList";

const MapListStyle = css`
  display: flex;
  padding-left: 75px;
  flex-direction: column;
  margin-top: 30px;
  height: 850px;
  padding: 0 20px;

  li {
    display: flex;
    flex-direction: column;

    h3 {
      margin-bottom: 5px;
      font-size: 1.0625rem;
      font-weight: bold;
      line-height: 1.5;
      color: rgb(139, 149, 161);
    }

    h4 {
      margin-bottom: 50px;
      font-size: 1.0625rem;
      font-weight: 500;
      line-height: 1.5;
      color: rgb(242, 244, 246);
      white-space: pre-wrap;
    }
  }
`;

const HorizontalMap = () => {
  const initialData = Data[Data.length - 1];
  const [yearState, setYear] = useState<historyDataType>([initialData]);

  const selectYear = (year: number) => {
    const copyData = [...Data];
    const result = copyData.filter((item) => item.year === year);
    setYear(result);
  };

  return (
    <>
      <HorizontalList selectYear={selectYear} yearState={yearState} />
      <ul css={MapListStyle}>
        {yearState[0].history.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item.date}</h3>
              <h4>{item.text}</h4>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HorizontalMap;
