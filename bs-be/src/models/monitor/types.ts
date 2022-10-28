import { Schema } from "mongoose";

export interface IMonitor {
  _id?: Schema.Types.ObjectId | string;
  token: string;

  startAt: Date;
  doneAt: Date;
}
