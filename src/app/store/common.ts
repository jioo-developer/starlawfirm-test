import { create } from "zustand";

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
