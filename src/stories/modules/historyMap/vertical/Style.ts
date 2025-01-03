import { css } from "@emotion/react";
export const MapListStyle = css`
  display: flex;
  flex-direction: column;
  padding-left: 75px;
  @media all and (max-width: 760px) {
    padding-left: 0;
  }

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
