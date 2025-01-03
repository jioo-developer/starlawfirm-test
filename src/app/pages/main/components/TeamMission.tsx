/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { showStore, useScrollStore } from "@/app/store/common";
import { useCallback, useEffect, useRef, useState } from "react";
import { throttle } from "@/app/handler/common";

const TeamMission = () => {
  const scroll = useScrollStore().scroll;
  const [opacity, setOpacity] = useState(1);
  const thirdSectionRef = useRef<HTMLElement | null>(null);
  const coverRef = useRef<HTMLDivElement | null>(null);

  const show = showStore().toggle;

  const opaticyValue = css`
    opacity: ${opacity};
  `;

  const scrollHandler = () => {
    if (thirdSectionRef.current) {
      const sectionTop = thirdSectionRef.current.offsetTop;
      // .section03의 시작 위치 (뷰포트 기준)
      const sectionHeight = thirdSectionRef.current.offsetHeight;
      // .section03의 전체 높이
      if (scroll > sectionTop && scroll < sectionTop + sectionHeight) {
        // 스크롤이 top 보다 크고 top + height 보다 작을 때  = 섹션의 시작과 끝
        const scrollInSection = scroll - sectionTop; // .section03 내부에서 스크롤된 거리
        const scrollPercent = (scrollInSection / sectionHeight) * 100; // 스크롤 퍼센트 계산
        const result = Math.round(scrollPercent); // 소수점 반올림
        if (result < 100) {
          showStore.setState({ toggle: true });
        } else {
          showStore.setState({ toggle: false });
        }
        if (result >= 70) {
          // opacity 투명효과가 끝나는 수치 조정
          setOpacity(1);
        } else {
          setOpacity(result / 100);
        }
      } else {
        setOpacity(1);
        showStore.setState({ toggle: false });
        // 섹션을 벗어날 때 다시 초기화
      }
    }
  };
  const throttleScroll = useCallback(() => {
    throttle(scrollHandler, 250);
  }, []);
  // 스크롤 이벤트 이기 때문에 이벤트 중첩을 방지하기 위해 쓰로틀 처리

  useEffect(() => {
    throttleScroll();
  }, [scroll]);

  return (
    <section className="section03" ref={thirdSectionRef}>
      {show && <div className="cover" css={opaticyValue} ref={coverRef}></div>}
      <div className="in_wrap">
        {show && <div className="background"></div>}
        <div className="team_mission">
          <span className="mission_title">Team Mission</span>
          <p className="mission_text">
            토스팀은 바꾸고 싶은 세상의 모습이 있고 생각만 해도 가슴 뛰는 목표가
            있는 조직입니다. 어렵고, 불편하고, 멀게 느껴지는 금융이 아닌
            누구에게나 쉽고 상식적인 금융을 만드는 것이 토스팀의 존재
            이유입니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamMission;
