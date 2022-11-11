import { ResponseError } from "@routes/error";
import { getTimezoneDate } from "@utils";
import { StatusCodes } from "http-status-codes";
import { Schema } from "mongoose";
import { MonitorModel } from ".";

export interface IMonitor {
  _id?: Schema.Types.ObjectId | string;
  token: string;
  userId: Schema.Types.ObjectId | string;
  buildingId: number;
  unitId: number;

  startAt: Date;
  doneAt?: Date;
}

export class Monitor implements IMonitor {
  _id?: Schema.Types.ObjectId | string;
  token!: string;
  userId!: Schema.Types.ObjectId | string;

  buildingId!: number;
  unitId!: number;

  startAt!: Date;
  doneAt?: Date;

  constructor(document: IMonitor) {
    Object.assign(this, document);
  }

  static async getFromToken(token: string) {
    const document = await MonitorModel.findOne({ token });

    if (!document)
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "토큰정보가 존재하지 않습니다."
      );
    return new Monitor(document.toObject());
  }

  async setDone() {
    await MonitorModel.updateOne(
      { _id: this._id! },
      { $set: { doneAt: getTimezoneDate(new Date(Date.now())) } }
    );
  }
}
