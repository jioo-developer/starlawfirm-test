/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { throttle } from "@/app/handler/common";

type stylePropsType = {
  width: number;
  height: number;
  radius?: number;
  active?: number;
  index: number;
};

const articleStyle = ({
  width,
  height,
  radius,
  active,
  index,
}: stylePropsType) => css`
  width: ${width}px;
  margin-bottom: 80px;

  @media all and (max-width: 760px) {
    width: 100%;
  }

  figure {
    width: ${width}px;
    height: ${height}px;
    border-radius: ${radius ? radius : 0}px;
    overflow: hidden;
    margin-bottom: 20px;
    opacity: ${active === index ? "1" : "0.3"};

    @media all and (max-width: 760px) {
      &,
      & > img {
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

interface newType extends stylePropsType {
  items: { type: string; title: string; date: string };
  index: number;
  handler: (object: { topvalue: number; heightvalue: number }) => void;
  active?: number;
}

const NoticeArticle = ({
  items,
  index,
  width,
  height,
  radius,
  handler,
  active,
}: newType) => {
  const ArticleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    throttleHandler(); // 초기 실행
    window.addEventListener("resize", throttleHandler);

    return () => {
      window.removeEventListener("resize", throttleHandler);
    };
  }, []);

  const articleIfnoSetting = () => {
    if (ArticleRef && ArticleRef.current) {
      const offsetTop = ArticleRef.current.offsetTop;
      const offsetHeight = ArticleRef.current.offsetHeight;
      const object = { topvalue: offsetTop, heightvalue: offsetHeight };
      handler(object);
    }
  };

  const throttleHandler = throttle(articleIfnoSetting, 300);

  return (
    <article
      css={articleStyle({ width, height, radius, active, index })}
      ref={ArticleRef}
    >
      <figure>
        <Image
          src={`/images/article_image${index + 1}.webp`}
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
