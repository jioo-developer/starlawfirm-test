import { useScrollStore } from "@/app/store/common";
import FlowImage from "@/app/utils/FlowImage";
import StatisticsList from "@/stories/atoms/StatisticsList";

export const statistList = [
  { label: "월간 활성 사용자", value: "1,910만" },
  { label: "누적 가입자 수", value: "2,800만" },
  { label: "서비스 수", value: "100개" },
];

const Introduce = () => {
  const scroll = useScrollStore().scroll;
  return (
    <section className="section02">
      <div className="in_wrap">
        <p className="title">
          <span className={scroll >= 400 ? "active" : ""}>
            변화를 열망하는 사람들이 모여,
            <br />
            역사에 남을만한 변화를 만듭니다.
          </span>
        </p>
        <StatisticsList list={statistList} width={"44%"} wrap={true} />
      </div>
      <FlowImage />
    </section>
  );
};

export default Introduce;
