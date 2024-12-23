import HistoryMap from "@/stories/modules/historyMap/HistoryMap";
import { showStore } from "@/app/store/common";

const History = () => {
  const show = showStore().toggle;

  const sectionStyle = !show ? { background: "#121417" } : {};

  return (
    <section className="section04" style={sectionStyle}>
      <div className="in_wrap">
        <p className="title">
          토스팀은 오늘도
          <br />
          위대한 역사를 만들고 있습니다
        </p>
        <HistoryMap />
      </div>
    </section>
  );
};
export default History;
