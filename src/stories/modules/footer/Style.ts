import { css } from "@emotion/react";

export const Style = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #f9fdfb; /* 연한 배경색 */
  padding: 40px 20px;
  box-sizing: border-box;
  position: relative;
  z-index: 400;

  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    gap: 20px;

    .footer-column {
      flex: 1;
      min-width: 200px;

      p {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 10px;
        color: #333;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          font-size: 0.875rem;
          color: #555;
          margin-bottom: 8px;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    margin-top: 1.875em;
    font-size: 0.875rem;
    color: #666;
    line-height: 1.4;

    p {
      margin: 0; /* 각 줄 간격을 줄이기 위해 여백 제거 */
    }
  }
`;
