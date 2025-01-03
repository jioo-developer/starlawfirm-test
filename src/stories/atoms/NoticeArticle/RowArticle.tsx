/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { articleStyle, subTItle } from "./RowStyle";

export type propsType = {
  width: number;
  height: number;
  radius?: number;
};

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
