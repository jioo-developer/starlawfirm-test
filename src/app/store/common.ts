import { create } from "zustand";

// zustand 중앙 상태관리

export const useScrollStore = create(() => ({
  scroll: 0,
  scrollDir: "top",
}));

// 스크롤 관련 store

export const useMswReady = create(() => ({
  loading: false,
}));

// msw 실행 관련 store

export const showStore = create(() => ({
  toggle: false,
}));

// section 03 ~ 04 편의성 사용 store
