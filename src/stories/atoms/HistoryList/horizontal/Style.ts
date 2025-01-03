import { css } from "@emotion/react";

export const Style = css`
  width: 99%;
  overflow-x: scroll;
  white-space: nowrap;
  border-bottom: 1px solid #fff;
  box-sizing: border-box;
  padding: 0 10px;
  /* 텍스트가 줄바꿈되지 않도록 설정 */

  .years {
    display: inline-flex;
    width: 100%;
    gap: 20px;
    height: 45px;
  }

  .year {
    color: rgb(107, 118, 132);
    /* 기본 텍스트 색상 */
    font-size: 1.125rem;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .year.active {
    color: #fff;
    /* 활성화된 텍스트 색상 */
    font-weight: bold;
    position: relative;
  }

  .year.active::after {
    content: "";
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #fff;
    /* 활성화된 밑줄 */
    margin: 0 auto;
    width: 100%;
  }

  &::-webkit-scrollbar {
    heigth: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background: #fff;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;
