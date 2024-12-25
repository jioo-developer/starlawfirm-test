import { useEffect } from "react";
import { useScrollStore } from "../store/common";
import { throttle } from "../handler/common";

const useScroll = () => {
  const { scroll, scrollDir } = useScrollStore();

  // FUNCTION 현재 스크롤 저장
  const onScrollDoc = () => {
    const currentScroll = document.scrollingElement?.scrollTop || 0;
    // 최상단일 경우 즉시 업데이트
    if (currentScroll === 0) {
      useScrollStore.setState({ scroll: 0, scrollDir: "top" });
    } else {
      useScrollStore.setState((state) => {
        if (state.scroll !== currentScroll) {
          return { scroll: currentScroll };
          // 스크롤 값 리턴
        }
        return state;
        // Scroll 값의 상태가 동일하면 업데이트하지 않음
      });
    }
  };

  // FUNCTION 스크롤 이벤트 감지
  useEffect(() => {
    const throttledScroll = throttle(onScrollDoc, 10);
    document.addEventListener("scroll", throttledScroll);

    return () => document.removeEventListener("scroll", throttledScroll);
  }, []);

  // FUNCTION 스크롤 방향 감지
  useEffect(() => {
    const unsubscribe = useScrollStore.subscribe((state, prevState) => {
      if (state.scroll === 0 && state.scrollDir !== "top") {
        useScrollStore.setState({ scrollDir: "top" });
      } else if (
        state.scroll > prevState.scroll &&
        state.scrollDir !== "down"
      ) {
        useScrollStore.setState({ scrollDir: "down" });
      } else if (state.scroll < prevState.scroll && state.scrollDir !== "up") {
        useScrollStore.setState({ scrollDir: "up" });
      }
    });

    return () => unsubscribe();
  }, []);

  return { scroll, scrollDir };
};

export default useScroll;
