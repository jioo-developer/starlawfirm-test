/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { css } from "@emotion/react";

type propsType = {
  width: number;
  height: number;
  radius?: number;
};

const articleStyle = ({ width, height, radius }: propsType) => css`
  width: ${width}px;
  margin-bottom: 80px;

  &:last-child {
    margin-bottom: 0;
  }
  figure {
    width: ${width}px;
    height: ${height}px;
    border-radius: ${radius ? radius : 0}px;
    overflow: hidden;
    margin-bottom: 20px;
  }

  figcaption {
    display: flex;
    flex-direction: column;

    .notice_type,
    .notice_date {
      color: #8b95a1;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.4;
      margin-bottom: 10px;
    }

    .notice_title {
      color: #fff;
      font-size: 28px;
      font-weight: 600;
      line-height: 1.4;
      margin-bottom: 10px;
      transition: 0.2s ease-in-out;
    }
  }
`;

interface newType extends propsType {
  items: { type: string; title: string; date: string };
  index: number;
}

const NoticeArticle = ({ items, index, width, height, radius }: newType) => {
  return (
    <article css={articleStyle({ width, height, radius })}>
      <figure>
        <Image
          src={`/images/article_image${index + 1}.jpg`}
          width={width}
          height={height}
          alt="아티클1"
        />
      </figure>
      <figcaption>
        <span className="notice_type">{items.type}</span>
        <p className="notice_title">{items.title}</p>
        <span className="notice_date">{items.date}</span>
      </figcaption>
    </article>
  );
};

export default NoticeArticle;
