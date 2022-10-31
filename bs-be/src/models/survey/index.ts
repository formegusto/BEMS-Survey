import { model, Schema } from "mongoose";
import { ISurvey } from "./types";

const SurveySchema = new Schema<ISurvey>(
  {
    result: { type: Schema.Types.Mixed, required: true },
    userId: { type: Schema.Types.ObjectId, required: true },
    monitorId: { type: Schema.Types.ObjectId, required: true },
  },
  {
    collection: "Survey",
    timestamps: true,
    versionKey: false,
  }
);

export const SurveyModel = model<typeof SurveySchema>("Survey", SurveySchema);
