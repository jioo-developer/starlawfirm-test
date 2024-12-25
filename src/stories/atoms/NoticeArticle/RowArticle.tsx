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
  cursor: pointer;
  gap: 0 1.25em;
  @media all and (max-width: 760px) {
    flex-direction: column;
    margin-bottom: 9vw;
  }

  &:hover {
    .notice_title {
      color: #007bff;
    }
    figure {
      position: relative;
      bottom: 5px;
      transition-duration: 0.5s;
      box-shadow: 2px 15px 20px rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
  figure {
    width: ${width}px;
    height: ${height}px;
    border-radius: ${radius ? radius : 0}px;
    overflow: hidden;
    order: 1;

    @media all and (max-width: 760px) {
      & {
        width: 100%;
        height: auto;
        order: 0;
      }
    }
  }

  figcaption {
    display: flex;
    flex-direction: column;
    order: 0;
    max-width: 455px;
    .notice_type,
    .notice_date {
      color: #8b95a1;
      font-size: 0.975rem;
      font-weight: 400;
      line-height: 1.4;
      margin-bottom: 0.625em;
      @media all and (max-width: 760px) {
        order: 1;
      }
    }

    .notice_title {
      color: #000;
      font-size: 1.4375rem;
      font-weight: 600;
      line-height: 1.4;
      margin-bottom: 0.625em;
      transition: 0.2s ease-in-out;
    }
  }
`;

const subTItle = css`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.25em;
`;

interface newType extends propsType {
  items: { type: string; title: string; subTitle: string; date: string };
  index: number;
  page: number;
}

const RowNoticeArticle = ({
  items,
  index,
  width,
  height,
  radius,
  page,
}: newType) => {
  return (
    <article css={articleStyle({ width, height, radius })}>
      <figure>
        <Image
          src={`/images/article_image${(index + 1) * page}.webp`}
          width={width}
          height={height}
          alt={`아티클-${index}`}
          layout="responsive" // 반응형 레이아웃
          title="임의의 이미지 입니다."
        />
      </figure>
      <figcaption>
        <span className="notice_type">{items.type}</span>
        <p className="notice_sub_title">{items.title}</p>
        <p className="sub_title" css={subTItle}>
          {items.subTitle}
        </p>
        <span className="notice_date">{items.date}</span>
      </figcaption>
    </article>
  );
};

export default RowNoticeArticle;
