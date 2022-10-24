import { combineReducers } from "redux";
import { targetReducer as target } from "./target";

export const rootReducer = combineReducers({
  target,
});
export type RootReducer = ReturnType<typeof rootReducer>;
