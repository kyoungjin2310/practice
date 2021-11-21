import { RouterState } from "connected-react-router";
import { Reducer, AnyAction } from "redux";

export type LoginReqType = {
  email: string;
  password: string;
};

export type AuthState = {
  token: string | null;
  loading: boolean;
  error: Error | null;
};

export interface RootState {
  auth: AuthState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}
