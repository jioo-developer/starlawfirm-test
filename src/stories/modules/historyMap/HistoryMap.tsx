/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import { Data, historyDataType } from "@/stories/atoms/HistoryList/historyData";
import HistoryList from "@/stories/atoms/HistoryList/HistoryList";
import { useState } from "react";

const MapListStyle = css`
  display: flex;
  flex-direction: column;
  padding-left: 75px;

  li {
    display: flex;
    flex-direction: column;

    h3 {
      margin-bottom: 5px;
      font-size: 17px;
      font-style: normal;
      font-weight: bold;
      line-height: 21px;
      color: rgb(139, 149, 161);
    }

    h4 {
      margin-bottom: 50px;
      font-size: 17px;
      font-style: normal;
      font-weight: 500;
      line-height: 1.5em;
      color: rgb(242, 244, 246);
      white-space: pre-wrap;
    }
  }
`;

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
