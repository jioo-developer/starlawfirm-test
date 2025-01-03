/** @jsxImportSource @emotion/react */
"use client";
import { Data, historyDataType } from "../vertical/historyData";
import { Style } from "./Style";

type propsType = {
  yearState: historyDataType;
  selectYear: (year: number) => void;
};

const HorizontalList = ({ yearState, selectYear }: propsType) => {
  const scrollFunc = (target: HTMLLIElement) => {
    target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="year-selector" css={Style}>
      <ul className="years">
        {[...Data].reverse().map((item, index) => {
          return (
            <li
              key={index}
              data-year={item.year}
              className={
                item.year === yearState[0].year ? "active year" : "year"
              }
              onClick={(e: React.MouseEvent<HTMLLIElement>) => {
                selectYear(item.year);
                scrollFunc(e.currentTarget);
              }}
            >
              {item.year}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HorizontalList;
