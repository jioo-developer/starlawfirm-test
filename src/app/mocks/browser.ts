import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// MSW Worker 생성
export const worker = setupWorker(...handlers);
