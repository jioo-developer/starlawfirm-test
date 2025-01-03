import { officeList } from "@/app/common/data/commondata";
import GridBox from "@/stories/atoms/GridBox";
import { useInView } from "react-intersection-observer";

const Corporation = () => {
  const { ref, inView } = useInView({ threshold: 0.004 });
  // lazyload 관련 hook library
  return (
    <section className="section05" ref={ref}>
      <div className="in_wrap">
        <div className="title_wrap">
          <h4 className="title">토스가 바꿀 금융</h4>
          <p className="sub_title">
            모두를 위한, 새로운 금융을 만들고자 합니다
          </p>
          <div className="contents" style={{ opacity: inView ? 1 : 0 }}>
            {officeList.map((item, index) => {
              return (
                <GridBox
                  items={item}
                  index={index}
                  key={index}
                  width={458}
                  height={528}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corporation;
