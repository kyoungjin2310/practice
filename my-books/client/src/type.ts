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

export type BooksState = {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
};

export type RootState = {
  auth: AuthState;
  books: BooksState;
  router: Reducer<RouterState<unknown>, AnyAction>;
};

export type BookType = {};
