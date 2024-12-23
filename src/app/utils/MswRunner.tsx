"use client";

import { useEffect } from "react";
import { useMswReady } from "../store/common";

export const MSWComponent = () => {
  let workerStarted = false;
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "development"
    ) {
      console.log("Initializing MSW...");
      import("../mocks/browser")
        .then((module) => {
          const { worker } = module;
          if (!workerStarted) {
            worker
              .start({
                onUnhandledRequest: "bypass",
              })
              .then(() => {
                useMswReady.setState({ loading: true });
              });
            workerStarted = true; // 상태를 업데이트하여 중복 호출 방지
          }
        })
        .catch(() => console.log("msw 실행 안됨"));
    }
  }, []);

  return null;
};
