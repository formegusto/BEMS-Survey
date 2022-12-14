import { handleActions } from "redux-actions";
import { Building, INIT_BUILDING, INIT_UNIT, Unit } from "./types";

export interface TargetStore {
  unit?: Unit;
  building?: Building;
}
export const targetStore: TargetStore = {};
export const targetReducer = handleActions<TargetStore, any>(
  {
    [INIT_BUILDING]: (state, action) => ({
      ...state,
      building: action.payload,
    }),
    [INIT_UNIT]: (state, action) => ({
      ...state,
      unit: action.payload,
    }),
  },
  targetStore
);
