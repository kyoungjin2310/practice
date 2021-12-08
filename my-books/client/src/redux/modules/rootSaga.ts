import { all } from "redux-saga/effects";
import { authSaga } from "./auth";
import { booksSage } from "./books";
export default function* rootSaga() {
  //배열로 하위 saga를 가져옴
  yield all([authSaga(), booksSage()]);
}
