import { createAction } from "redux-actions";
import { Building, INIT_BUILDING, INIT_UNIT, Unit } from "./types";

export const initBuilding = createAction<Building>(INIT_BUILDING);
export const initUnit = createAction<Unit>(INIT_UNIT);
