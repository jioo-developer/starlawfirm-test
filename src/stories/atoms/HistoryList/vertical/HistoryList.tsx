/** @jsxImportSource @emotion/react */
"use client";
import { Data, historyDataType } from "./historyData";
import { UlStyle, YearStyle } from "./Style";

type propsType = {
  yearState: historyDataType;
  selectYear: (year: number) => void;
};

const HistoryList = ({ yearState, selectYear }: propsType) => {
  return (
    <ul css={UlStyle}>
      {[...Data].reverse().map((item, index) => {
        return (
          <li
            key={index}
            css={YearStyle(item.year)}
            data-year={item.year}
            className={item.year === yearState[0].year ? "active" : ""}
            onClick={() => selectYear(item.year)}
          ></li>
        );
      })}
    </ul>
  );
};

export default HistoryList;
