import { createAction } from "redux-actions";
import { BasicInfo, INIT_BASICINFO } from "./types";

export const initBasicInfo = createAction<BasicInfo>(INIT_BASICINFO);
