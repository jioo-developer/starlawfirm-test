import { create } from "zustand";

// zustand 중앙 상태관리

export const useScrollStore = create(() => ({
  scroll: 0,
  scrollDir: "top",
}));

export const useMswReady = create(() => ({
  loading: false,
}));

export const showStore = create(() => ({
  toggle: false,
}));
