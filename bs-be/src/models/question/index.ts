import { model, Schema } from "mongoose";
import { IQuestion } from "./types";

const QuestionSchema = new Schema<IQuestion>(
  {
    question: { type: String, required: true },
    values: [{ type: Number, required: true }],
    sequence: { type: Number },
    type: { type: String },
  },
  {
    collection: "Question",
    versionKey: false,
  }
);

export const QuestionModel = model<typeof QuestionSchema>(
  "Question",
  QuestionSchema
);
