import { Schema } from "mongoose";

export interface ISurvey {
  result: {
    [key: string]: string | number;
  };
  userId: Schema.Types.ObjectId;
}
