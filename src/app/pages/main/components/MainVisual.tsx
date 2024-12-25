import Image from "next/image";
import { useEffect, useState } from "react";

const MainVisual = () => {
  const [firstRender, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <section className="section01 background">
      <div className="cover"></div>
      <div className="main_visual_title">
        <div className="sec_top">
          <span className={firstRender ? "active before" : "before"}>
            금융,
          </span>
          <span className={firstRender ? "active after" : "after"}>
            그 이상의
          </span>
        </div>
        <span className={firstRender ? "active after" : "after"}>
          역사를 만들고 있습니다
        </span>
      </div>
      <div className="down_arrow">
        <Image
          src={"/images/down-arrow.png"}
          width={28}
          height={14}
          alt="downArrow"
        />
      </div>
    </section>
  );
};

export default MainVisual;
