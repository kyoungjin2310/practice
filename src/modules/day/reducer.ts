import { ListState, ListAction } from "./type";
import { createReducer } from "typesafe-actions";
import { webToonList } from "../../api/data";
import {
  FAVORITE_NUM,
  VIEWS,
  F_VIEWS,
  M_VIEWS,
  DAY_VIEWS,
  TYPE_VIEWS,
  DATE_VIEWS,
  TODAY_VIEWS,
} from "./action";

// 초기
const initialState: ListState = webToonList;

//reducer
const reducer = createReducer<ListState, ListAction>(initialState, {
  [FAVORITE_NUM]: (state) =>
    state.sort((a, b) => b.favoriteNum - a.favoriteNum),
  [VIEWS]: (state) => state.sort((a, b) => b.views - a.views),
  [F_VIEWS]: (state) => state.sort((a, b) => b.fViews - a.fViews),
  [M_VIEWS]: (state) => state.sort((a, b) => b.mViews - a.mViews),
  [DAY_VIEWS]: (state, { payload: day }) =>
    state.map((list) =>
      list.day === day ? { ...list, active: true } : { ...list, active: false }
    ),
  [TYPE_VIEWS]: (state, { payload: type }) =>
    state.map((list) =>
      list.day === type ? { ...list, active: true } : { ...list, active: false }
    ),
  [DATE_VIEWS]: (state) =>
    state.sort(
      (a, b) =>
        parseInt(b.date.replace("-", "")) - parseInt(a.date.replace("-", ""))
    ),
  [TODAY_VIEWS]: (state, { payload: day }) =>
    state.map((list) =>
      list.day === day ? { ...list, active: true } : { ...list, active: false }
    ),
});

export default reducer;
