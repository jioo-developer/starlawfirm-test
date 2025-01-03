/** @jsxImportSource @emotion/react */
"use client";
import {
  Data,
  historyDataType,
} from "@/stories/atoms/HistoryList/vertical/historyData";
import { useState } from "react";
import HorizontalList from "@/stories/atoms/HistoryList/horizontal/HorizontalList";
import { MapListStyle } from "./Style";

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
