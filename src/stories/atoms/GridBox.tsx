/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import { useState } from "react";

type gridStylePropsType = {
  width: number | string;
  height: number;
};

const gridStyle = ({ width, height }: gridStylePropsType) => css`
  display: flex;
  width: ${typeof width === "number" ? `${width}px` : width};
  height: ${height}px;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
`;

const secTopStyle = css`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 100;
  .office_title {
    height: 24px;
    margin: 0 0 8px 0;
    overflow-y: hidden;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    color: #4e5968;
    opacity: 1;
    transition:
      opacity 0.3s ease,
      height 0.3s ease;
  }
  .office_ment {
    margin: 0 0 20px 0;
    font-size: 32px;
    font-weight: bold;
    line-height: 41px;
    color: #333d4b;
    width: 88%;
    opacity: 1;
    transition:
      font-size 0.3s ease,
      line-height 0.3s ease;
  }

  .hidden_text {
    p {
      display: none;
    }
    span {
      display: none;
    }
  }

  .more_btn {
    display: block;
    width: 24px;
    height: 24px;
    background-image: url(/images/plus_btn.svg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &.active {
    .office_title {
      opacity: 0;
    }
    .office_ment {
      font-size: 26px;
      line-height: 33px;
    }

    .more_btn {
      display: none;
    }

    .close_btn {
      position: absolute;
      bottom: 35px;
      left: 7px;
      display: block;
      width: 24px;
      height: 24px;
      background-image: url(/images/close_btn.svg);
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 101;
    }

    .hidden_text {
      p {
        display: block;
        font-size: 17px;
        font-weight: 500;
        line-height: 1.5;
        color: rgb(51, 61, 75);
        letter-spacing: -0.1px;
        transition: opacity 0.3s;
      }
      span {
        display: block;
        margin-top: 24px;
        font-size: 16px;
        font-weight: normal;
        line-height: 20px;
        color: rgb(49, 130, 246);
        transition:
          font-size 0.3s,
          line-height 0.3s;
      }
    }
  }
`;

const background = (index: number) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(/images/sec05_image${index + 1}.jpg);
  background-repeat: no repeat;
  background-size: cover;
  transition: background-image 0.3s;

  &.active {
    filter: blur(58px);
    transform: scale(1.2);

    &::before {
      position: absolute;
      inset: 0px;
      content: "";
      background: rgba(255, 255, 255, 0.6);
    }
  }
`;

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
              : items.title + "홈페이지 바로가기"}{" "}
          </span>
        </div>

        <button
          className="more_btn"
          onClick={() => {
            setToggle(!toggle);
          }}
        ></button>
        <button
          className="close_btn"
          onClick={() => {
            setToggle(!toggle);
          }}
        ></button>
      </div>
    </article>
  );
};

export default GridBox;