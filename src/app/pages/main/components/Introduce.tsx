import { statistList } from "@/app/common/data/commondata";
import { useScrollStore } from "@/app/store/common";
import FlowImage from "@/app/utils/FlowImage";
import StatisticsList from "@/stories/atoms/StatisticsList";

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
