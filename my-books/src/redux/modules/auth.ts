import { createActions, handleActions } from "redux-actions";

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
export const {} = createActions("PENDING", "SUCCESS", "FAIL", { prefix });

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
export function* authSaga() {}
