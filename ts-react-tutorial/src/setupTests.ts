// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./mocks/server";

//시작하기전에 서버 사용
beforeAll(() => server.listen());

//test 하고나서 영향이 가지 않게 하기
afterEach(() => server.resetHandlers());

//서버 clean up
afterAll(() => server.close());
