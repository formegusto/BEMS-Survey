import { model, Schema } from "mongoose";
import { IMonitor } from "./types";

const MonitorSchema = new Schema<IMonitor>(
  {
    token: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, required: true },
    startAt: { type: Date },
    doneAt: { type: Date },
  },
  {
    collection: "Monitor",
    versionKey: false,
  }
);

export const MonitorModel = model<typeof MonitorSchema>(
  "Monitor",
  MonitorSchema
);
