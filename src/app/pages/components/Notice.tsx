import { debounce } from "@/app/handler/common";
import { useMswReady } from "@/app/store/common";
import { Button } from "@/stories/atoms/Button";
import RowNoticeArticle from "@/stories/atoms/NoticeArticle/RowArticle";
import Pagination from "@/stories/atoms/pagination/Pagination";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type dataType = {
  type: string;
  title: string;
  subTitle: string;
  date: string;
};

const Notice = () => {
  const { ref, inView } = useInView({ threshold: 0.05 });

  const [page, setPage] = useState(1);

  const PageChangeHandler = (params: number) => {
    setPage(params);
  };

  const [NoticeData, setData] = useState<dataType[]>([]);

  const mswloading = useMswReady().loading;

  const fetchData = async (params: number) => {
    try {
      const res = await axios.get("/NoticeData", {
        params: { params },
      });
      setData(res.data.data);
    } catch {
      window.alert("데이터를 가져오지 못했습니다.");
    }
  };

  const fetchDebounce = useCallback(
    debounce((page: number) => fetchData(page), 400), // 300ms 지연 설정
    []
  );

  useEffect(() => {
    if (mswloading) {
      fetchDebounce(page);
    }
  }, [mswloading, page, fetchDebounce]);

  return (
    <section className="section07" ref={ref}>
      <div className={inView ? "in_wrap active" : "in_wrap"}>
        <p className="notice_title">토스 새소식</p>
        <section>
          {NoticeData.length > 0 ? (
            NoticeData.map((item, index) => {
              return (
                <RowNoticeArticle
                  items={item}
                  index={index}
                  key={index}
                  width={249}
                  height={167}
                  radius={16}
                  page={page}
                />
              );
            })
          ) : (
            <Button
              theme="white"
              width={140}
              height={46}
              fontSize={16}
              className="more_notice"
              onClick={() => fetchDebounce(page)}
            >
              소식이 안뜰 때 클릭
            </Button>
          )}
        </section>
        <Pagination page={page} handler={PageChangeHandler} />
      </div>
    </section>
  );
};

export default Notice;
