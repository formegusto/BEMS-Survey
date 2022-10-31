import { handleActions } from "redux-actions";
import { BasicInfo, INIT_BASICINFO } from "./types";

export interface SurveyStore {
  basicInfo?: BasicInfo;
}
export const surveyStore: SurveyStore = {};
export const surveyReducer = handleActions<SurveyStore, any>(
  {
    [INIT_BASICINFO]: (state, action) => ({
      ...state,
      basicInfo: action.payload,
    }),
  },
  surveyStore
);
