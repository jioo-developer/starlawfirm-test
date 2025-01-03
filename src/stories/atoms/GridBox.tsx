/** @jsxImportSource @emotion/react */
"use client";
import { useState } from "react";
import { background, gridStyle, secTopStyle } from "./GridBoxStyle";

export type gridStylePropsType = {
  width: number | string;
  height: number;
};

type propsType = {
  items: { title: string; introduce: string; hiddenText: string };
  width: number | string;
  height: number;
  index: number;
};

const GridBox = ({ width, height, items, index }: propsType) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article
      className={toggle ? "active" : ""}
      css={[gridStyle({ width, height })]}
    >
      <div
        className={toggle ? "background active" : "background"}
        css={background(index)}
      ></div>
      <div className={toggle ? "sec_top active" : "sec_top"} css={secTopStyle}>
        <span className="office_title">{items.title}</span>
        <p className="office_ment">{items.introduce}</p>
        <div className="hidden_text">
          <p>{items.hiddenText}</p>
          <span>
            {items.title === "토스코어"
              ? "토스는 왜 금융을 바꾸려고 하는가?"
              : items.title + "홈페이지 바로가기"}
          </span>
        </div>

        <button
          className="more_btn text-blind"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          more
        </button>
        <button
          className="close_btn text-blind"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          close
        </button>
      </div>
    </article>
  );
};

export default GridBox;
