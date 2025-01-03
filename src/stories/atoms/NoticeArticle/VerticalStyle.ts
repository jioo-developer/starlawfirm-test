import { css } from "@emotion/react";

export type stylePropsType = {
  width: number;
  height: number;
  radius?: number;
  active?: number;
  index: number;
};

export const articleStyle = ({
  width,
  height,
  radius,
  active,
  index,
}: stylePropsType) => css`
  width: ${width}px;
  margin-bottom: 80px;

  @media all and (max-width: 1000px) {
    width: 100%;
  }

  figure {
    width: ${width}px;
    height: ${height}px;
    border-radius: ${radius ? radius : 0}px;
    overflow: hidden;
    margin-bottom: 20px;
    opacity: ${active === index ? "1" : "0.3"};

    @media all and (max-width: 1000px) {
      & {
        width: 100%;
        height: auto;
      }
    }
  }

  figcaption {
    display: flex;
    flex-direction: column;

    .notice_type,
    .notice_date {
      color: #8b95a1;
      font-size: 0.9375rem;
      font-weight: 400;
      line-height: 1.4;
      margin-bottom: 10px;
    }

    .notice_title {
      color: #fff;
      font-size: 1.75rem;
      font-weight: 600;
      line-height: 1.4;
      margin-bottom: 10px;
      transition: 0.2s ease-in-out;
    }
  }
`;
