import { combineReducers } from "redux";
import reducer from "./day";

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
