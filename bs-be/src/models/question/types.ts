import { Schema } from "mongoose";

export interface IQuestion {
  _id?: Schema.Types.ObjectId | string;
  question: string;
  values: number[];
  sequence?: number;
}
