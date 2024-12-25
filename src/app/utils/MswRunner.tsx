"use client";

import { useEffect } from "react";
import { useMswReady } from "../store/common";

// msw provider (독립실행)

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Initializing MSW...");
      import("../mocks/browser")
        .then(({ worker }) => {
          worker
            .start({
              onUnhandledRequest: "bypass", // 정의되지 않은 요청은 실제 네트워크로 전달
            })
            .then(() => {
              console.log("MSW is running.");
              useMswReady.setState({ loading: true }); // 상태 업데이트
            });
        })
        .catch(() => console.error("MSW initialization failed."));
    }
  }, []);

  return null;
};
