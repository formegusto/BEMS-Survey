import { model, Schema } from "mongoose";
import { IBasicInfo } from "./types";

const BasicSchema = new Schema<IBasicInfo>(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    sex: { type: String, required: true },
    position: { type: String, required: true },
    numOfPeople: { type: Number, required: true },
    workingTime: { type: Number, required: true },
  },
  {
    collection: "BasicInfo",
    timestamps: true,
    versionKey: false,
  }
);

export const BasicModel = model<typeof BasicSchema>("BasicInfo", BasicSchema);
