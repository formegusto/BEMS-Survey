import { createAction } from "redux-actions";
import { BuildingType } from ".";
import { BasicInfo, INIT_BASICINFO, INIT_TYPE } from "./types";

export const initBasicInfo = createAction<BasicInfo>(INIT_BASICINFO);
export const initType = createAction<BuildingType>(INIT_TYPE);
