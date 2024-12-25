import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// 브라우저용 MSW Worker 생성
export const worker = setupWorker(...handlers);
