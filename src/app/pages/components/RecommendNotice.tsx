import { overlapHandler, throttle } from "@/app/handler/common";
import { useScrollStore } from "@/app/store/common";
import { Button } from "@/stories/atoms/Button";
import NoticeArticle from "@/stories/atoms/NoticeArticle/NoticeArticle";
import { useEffect, useRef, useState } from "react";

export const newsList = [
  {
    type: "새소식",
    title: "토스, 3분기 연결 영업수익 5,021억 원",
    date: "2024.11.14",
  },
  {
    type: "새소식",
    title:
      "직장 어린이집의 판을 바꾼다, 아이도 부모도 반한 토스 우리동네 어린이집",
    date: "2024.12.10",
  },
  {
    type: "새소식",
    title: "토스씨엑스, 소비자중심경영(CCM) 인증 획득",
    date: "2024.12.10",
  },
];

type RefArrayType = {
  topvalue: number;
  heightvalue: number;
};

const RecommendNotice = () => {
  const scroll = useScrollStore().scroll;
  const [refValueArray, setArray] = useState<RefArrayType[]>([
    { topvalue: 0, heightvalue: 0 }, // 초기 값 설정
  ]);
  const sixSectionRef = useRef<HTMLElement | null>(null);

  const handler = (object: { topvalue: number; heightvalue: number }) => {
    setArray((state) => {
      const update = overlapHandler([...state, object]);
      return update.slice(-3);
    });
  };

  const [indexState, setIndex] = useState<number>(0);

  const scrollHandler = () => {
    if (sixSectionRef.current) {
      const sectionTop = sixSectionRef.current.offsetTop;
      const sectionHeight = sixSectionRef.current.offsetHeight;

      if (scroll > sectionTop && scroll < sectionTop + sectionHeight) {
        const scrollInSection = scroll - sectionTop;
        const scrollPercent = (scrollInSection / sectionHeight) * 100;
        const result = Math.round(scrollPercent);
        const lastValue = refValueArray[refValueArray.length - 1].topvalue;

        if (result < 100) {
          for (let idx = 0; idx < refValueArray.length - 1; idx++) {
            if (
              scrollInSection > refValueArray[idx].topvalue &&
              scrollInSection < refValueArray[idx + 1].topvalue
            ) {
              setIndex(idx);
              break;
            }
          }

          if (scrollInSection >= lastValue) {
            setIndex(refValueArray.length - 1);
          }
        }
      }
    }
  };

  const throttleScroll = throttle(scrollHandler, 250);

  useEffect(() => {
    throttleScroll();
  }, [scroll]);

  return (
    <section className="section06" ref={sixSectionRef}>
      <div className="in_wrap">
        <div className="left_article">
          {newsList.map((item, index) => {
            return (
              <NoticeArticle
                items={item}
                index={index}
                key={index}
                width={530}
                height={340}
                radius={16}
                handler={handler}
                active={indexState}
              />
            );
          })}
        </div>
        <div className="text_wrap">
          <h1 className="title">
            {newsList[indexState].title
              ? newsList[indexState].title
              : "이번주 토스's"}
          </h1>
          <p className="text">금주에 추천드리는 토스 소식입니다!</p>
          <Button
            theme="primary"
            width={116}
            height={40}
            fontSize={15}
            aria-label="새로운 소식 페이지로 이동"
          >
            소식 보러가기
          </Button>
        </div>
      </div>
    </section>
  );
};
export default RecommendNotice;
