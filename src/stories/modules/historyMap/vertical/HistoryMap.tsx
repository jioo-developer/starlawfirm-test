/** @jsxImportSource @emotion/react */
"use client";
import {
  Data,
  historyDataType,
} from "@/stories/atoms/HistoryList/vertical/historyData";
import HistoryList from "@/stories/atoms/HistoryList/vertical/HistoryList";
import { useState } from "react";
import { MapListStyle } from "./Style";

const HistoryMap = () => {
  const initialData = Data[Data.length - 1];
  const [yearState, setYear] = useState<historyDataType>([initialData]);

  const selectYear = (year: number) => {
    const copyData = [...Data];
    const result = copyData.filter((item) => item.year === year);
    setYear(result);
  };

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <HistoryList selectYear={selectYear} yearState={yearState} />
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
    </div>
  );
};

export default HistoryMap;
