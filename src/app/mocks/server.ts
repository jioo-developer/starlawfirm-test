import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Node.js 테스트 환경용 Server 설정
export const server = setupServer(...handlers);
