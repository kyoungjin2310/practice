import React from "react";
import { List } from "../../api/data";

type Action = { type: "LIST_SORT"; payload: any } | { type: "DATE_VIEWS" };

function reducer(state: List[], action: Action) {
  switch (action.type) {
    case "LIST_SORT":
      return state.sort(
        (a: any, b: any) => b[action.payload] - a[action.payload]
      );
    case "DATE_VIEWS":
      return state.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    default:
      return state;
  }
}
export default reducer;
