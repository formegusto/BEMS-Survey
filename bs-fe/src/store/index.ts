import { combineReducers } from "redux";
import { targetReducer as target } from "./target";
import { surveyReducer as survey } from "./survey";

export const rootReducer = combineReducers({
  target,
  survey,
});
export type RootReducer = ReturnType<typeof rootReducer>;

export * from "./target";
export * from "./survey";
