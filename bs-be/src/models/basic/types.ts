import _ from "lodash";
import { Schema } from "mongoose";
import { BasicModel } from ".";
import jwt from "jsonwebtoken";
import { MonitorModel } from "@models/monitor";

export interface IBasicInfo {
  _id?: Schema.Types.ObjectId | string;

  name: string;
  age: number;
  sex: string;
  position: string;
  numOfPeople: number;
  workingTime: number;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface BasicInfoFromToken {
  _id: string;
  name: string;
}

export class BasicInfo implements IBasicInfo {
  _id?: Schema.Types.ObjectId | string;

  name!: string;
  age!: number;
  sex!: string;
  position!: string;
  numOfPeople!: number;
  workingTime!: number;

  createdAt?: Date;
  updatedAt?: Date;

  constructor(document: IBasicInfo) {
    Object.assign(this, document);
  }

  toPlainObject() {
    return _.toPlainObject(this);
  }

  async getToken() {
    const inToken: BasicInfoFromToken = {
      _id: this._id as string,
      name: this.name,
    };

    const secret = process.env.JWT_SECRET!;
    const token = jwt.sign(inToken, secret, {
      algorithm: "HS256",
      expiresIn: "1h",
    });
    await MonitorModel.create({
      token,
      startAt: Date.now(),
    });

    return token;
  }

  static async create(basicInfo: IBasicInfo): Promise<BasicInfo> {
    const document = await BasicModel.create(basicInfo);
    return new BasicInfo(document.toObject());
  }
}
