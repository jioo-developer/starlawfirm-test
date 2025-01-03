import { css } from "@emotion/react";

export const MapListStyle = css`
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
