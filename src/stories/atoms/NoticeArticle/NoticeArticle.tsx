/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { throttle } from "@/app/handler/common";
import { articleStyle, stylePropsType } from "./verticalStyle";
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

  const throttleHandler = useCallback(() => {
    throttle(articleIfnoSetting, 300);
  }, []);

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
          layout="responsive" // 반응형 레이아웃
          alt="아티클1"
          title="임의의 이미지 입니다."
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
