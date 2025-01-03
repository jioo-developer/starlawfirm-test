import HistoryMap from "@/stories/modules/historyMap/vertical/HistoryMap";
import { showStore } from "@/app/store/common";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import HorizontalMap from "@/stories/modules/historyMap/horizontal/HorizontalMap";

const History = () => {
  const show = showStore().toggle;

  const sectionStyle = !show ? { background: "#121417" } : {};

  const isMobile = useMediaQuery("(max-width: 760px)");
  // 모바일 체크 hook library

  return (
    <section className="section04" style={sectionStyle}>
      <div className="in_wrap">
        <p className="title">
          토스팀은 오늘도
          <br />
          위대한 역사를 만들고 있습니다
        </p>
        {!isMobile ? <HistoryMap /> : <HorizontalMap />}
      </div>
    </section>
  );
};
export default History;
