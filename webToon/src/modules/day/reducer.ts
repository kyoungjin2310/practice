///import { ListState, ListAction } from "./type";
import { createReducer } from "typesafe-actions";
import { webToonList } from "../../api/data";

// 초기
//const initialState: ListState = webToonList;

//reducer 삭제하고 키를 파라미터로 받아와서 작성하기
/*const reducer = createReducer<ListState, ListAction>(initialState, {
  [FAVORITE_NUM]: (state) =>
    state.sort((a, b) => b.favoriteNum - a.favoriteNum).map((n) => n),
  [VIEWS]: (state) => state.sort((a, b) => b.views - a.views).map((n) => n),
  [F_VIEWS]: (state) => state.sort((a, b) => b.fViews - a.fViews).map((n) => n),
  [M_VIEWS]: (state) => state.sort((a, b) => b.mViews - a.mViews).map((n) => n),
  [TYPE_VIEWS]: (state, { payload: type }) =>
    state.map((list) =>
      list.day === type ? { ...list, active: true } : { ...list, active: false }
    ),
  [DATE_VIEWS]: (state) =>
    state
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((n) => n),
});

export default reducer;*/
