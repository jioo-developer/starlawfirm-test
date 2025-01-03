import { newsList } from "@/app/common/data/commondata";
import { overlapHandler, throttle } from "@/app/handler/common";
import { useScrollStore } from "@/app/store/common";
import { Button } from "@/stories/atoms/Button";
import NoticeArticle from "@/stories/atoms/NoticeArticle/NoticeArticle";
import { useCallback, useEffect, useRef, useState } from "react";

type RefArrayType = {
  topvalue: number;
  heightvalue: number;
};

const RecommendNotice = () => {
  const scroll = useScrollStore().scroll;
  const [refValueArray, setArray] = useState<RefArrayType[]>([
    { topvalue: 0, heightvalue: 0 }, // 초기 값 설정
  ]);
  // article 들의 top 값과 height 값을 중앙 관리하는 state

  const sixSectionRef = useRef<HTMLElement | null>(null);

  const handler = (object: { topvalue: number; heightvalue: number }) => {
    setArray((state) => {
      const update = overlapHandler([...state, object]);
      return update.slice(-3);
    });
  };
  // article 들의 top 값과 height 값을 받아오는 중요한 함수

  const [indexState, setIndex] = useState<number>(0);

  const scrollHandler = () => {
    if (sixSectionRef.current) {
      const sectionTop = sixSectionRef.current.offsetTop;
      // section06 top 값
      const sectionHeight = sixSectionRef.current.offsetHeight;
      // section06 height 값
      if (scroll > sectionTop && scroll < sectionTop + sectionHeight) {
        // 스크롤이 top 보다 크고 top + height 보다 작을 때
        // 시작부터 끝까지 일 때 if
        const scrollInSection = scroll - sectionTop;
        // 실제로 top 0부터 스크롤이 움직인 거리
        const scrollPercent = (scrollInSection / sectionHeight) * 100;
        // 거리를 퍼센트로 표현
        const result = Math.round(scrollPercent);
        // 퍼센트에서 소수점을 반올림
        const lastValue = refValueArray[refValueArray.length - 1].topvalue;

        if (result < 100) {
          // 퍼센트가 100이 되면 종료
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
            // 스크롤이 마지막 artlce에 도달하면 실행
            setIndex(refValueArray.length - 1);
          }
        }
      }
    }
  };

  const throttleScroll = useCallback(() => {
    throttle(scrollHandler, 250);
  }, []);
  // 스크롤 이기 때문에 쓰로틀을 적용해서 이벤트 중첩을 방지
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
