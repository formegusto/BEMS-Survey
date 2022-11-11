import { handleActions } from "redux-actions";
import { BasicInfo, INIT_BASICINFO, INIT_TYPE } from "./types";

export interface BuildingType {
  buildingId: number;
  unitId: number;
}

export interface SurveyStore {
  basicInfo?: BasicInfo;
  type?: BuildingType;
}
export const surveyStore: SurveyStore = {};
export const surveyReducer = handleActions<SurveyStore, any>(
  {
    [INIT_BASICINFO]: (state, action) => ({
      ...state,
      basicInfo: action.payload,
    }),
    [INIT_TYPE]: (state, action) => ({
      ...state,
      type: action.payload,
    }),
  },
  surveyStore
);
