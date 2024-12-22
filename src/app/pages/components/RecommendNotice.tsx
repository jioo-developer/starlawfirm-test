import { Button } from "@/stories/atoms/Button";
import NoticeArticle from "@/stories/atoms/NoticeArticle/NoticeArticle";

const newsList = [
  {
    type: "새소식",
    title: "토스, 3분기 연결 영업수익 5,021억 원",
    date: "2024.11.14",
  },
  {
    type: "새소식",
    title:
      "직장 어린이집의 판을 바꾼다: 아이도 부모도 반한 토스 우리동네 어린이집",
    date: "2024.12.10",
  },
  {
    type: "새소식",
    title: "토스씨엑스, 소비자중심경영(CCM) 인증 획득",
    date: "2024.12.10",
  },
];

const RecommendNotice = () => {
  return (
    <section className="section06">
      <div className="in_wrap">
        <article>
          {newsList.map((item, index) => {
            return (
              <NoticeArticle
                items={item}
                index={index}
                key={index}
                width={530}
                height={340}
                radius={16}
              />
            );
          })}
        </article>
        <div className="text_wrap">
          <h1 className="title">이번주 토스&apos;s</h1>
          <p className="text">토스의 소식이 궁금하신가요?</p>
          <Button theme="primary" width={116} height={40} fontSize={15}>
            소식 보러가기
          </Button>
        </div>
      </div>
    </section>
  );
};
export default RecommendNotice;
