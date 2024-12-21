/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { css } from "@emotion/react";

type propsType = {
  width: number;
  height: number;
  radius?: number;
};

const articleStyle = ({ width, height, radius }: propsType) => css`
  display: flex;
  width: 100%;
  margin-bottom: 80px;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 0;
  }
  figure {
    width: ${width}px;
    height: ${height}px;
    border-radius: ${radius ? radius : 0}px;
    overflow: hidden;
    order: 1;
  }

  figcaption {
    display: flex;
    flex-direction: column;
    order: 0;
    .notice_type,
    .notice_date {
      color: #8b95a1;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.4;
      margin-bottom: 10px;
    }

    .notice_title {
      color: #000;
      font-size: 23px;
      font-weight: 600;
      line-height: 1.4;
      margin-bottom: 10px;
      transition: 0.2s ease-in-out;
    }
  }
`;

interface newType extends propsType {
  items: { type: string; title: string; subTitle: string; date: string };
  index: number;
}

const RowNoticeArticle = ({ items, index, width, height, radius }: newType) => {
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
        <p
          className="sub_title"
          css={{ fontSize: 20, fontWeight: 500, marginBottom: 20 }}
        >
          {items.subTitle}
        </p>
        <span className="notice_date">{items.date}</span>
      </figcaption>
    </article>
  );
};

export default RowNoticeArticle;
