import { useScrollStore } from "@/app/store/common";
import { useEffect, useRef } from "react";

const TeamMission = () => {
  const scroll = useScrollStore().scroll;

  const thirdSectionRef = useRef<HTMLElement | null>(null);
  const FourthSectionRef = useRef<HTMLElement | null>(null);

  const opacityRef = useRef(1); // 리렌더링을 최소화하기 위해 useRef 사용

  useEffect(() => {
    if (scroll > 1800 && thirdSectionRef.current && FourthSectionRef.current) {
      const section03Rect = thirdSectionRef.current.getBoundingClientRect();
      const section04Rect = FourthSectionRef.current.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      // section03에서 opacity 감소
      if (section03Rect.top <= windowHeight && section03Rect.bottom >= 0) {
        const scrollProgress =
          1 - Math.min(1, Math.max(0, section03Rect.top / windowHeight));
        opacityRef.current = 1 - scrollProgress; // opacity 업데이트
      }

      // section04에서 opacity 복원
      if (section04Rect.top <= windowHeight && section04Rect.bottom >= 0) {
        const scrollProgress = Math.min(
          1,
          Math.max(0, 1 - section04Rect.top / (windowHeight / 2))
        );
        opacityRef.current = scrollProgress; // 점진적으로 opacity 증가
      }
    }
  }, [scroll]);

  return (
    <section className="section03" ref={thirdSectionRef}>
      <div
        className="cover"
        style={{
          opacity: opacityRef.current,
        }}
      ></div>
      <div className="in_wrap">
        {scroll > 1800 && scroll < 2600 && <div className="background"></div>}
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
