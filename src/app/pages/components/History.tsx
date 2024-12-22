import { useScrollStore } from "@/app/store/common";
import HistoryMap from "@/stories/modules/historyMap/HistoryMap";

const History = () => {
  const scroll = useScrollStore().scroll;

  return (
    <section
      className="section04"
      style={{ background: scroll >= 2600 ? "#121417" : "" }}
    >
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
