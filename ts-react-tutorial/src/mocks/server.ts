import { setupServer } from "msw/node";
import { handlers } from "./handler";

//mockup server 생성
export const server = setupServer(...handlers);
