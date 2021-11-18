import { takeEvery, put, call } from "@redux-saga/core/effects";
import { createActions, handleActions, Action } from "redux-actions";
import { loginFn, logoutFn } from "../../services/UserService";
import { LoginReqType } from "../../type";

type AuthState = {
  token: string | null;
  loading: boolean;
  error: Error | null;
};

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const prefix = "my-books/auth";

//앞에 prefix가 붙음
export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

const reducer = handleActions<AuthState, string>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    //토큰가져옴
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

//saga
export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix });

function* loginSaga(action: Action<LoginReqType>) {
  try {
    yield put(pending());
    const token: string = yield call(loginFn, action.payload);
    yield put(success(token));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data.error || "Error")));
  }
}
function* logoutSaga() {}

export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
