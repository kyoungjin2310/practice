import { all } from "redux-saga/effects";
import { authSaga } from "./auth";
export default function* rootSaga() {
  //배열로 하위 saga를 가져옴
  yield all([authSaga()]);
}
