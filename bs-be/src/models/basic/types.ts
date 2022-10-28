import _ from "lodash";
import { Schema } from "mongoose";
import { BasicModel } from ".";

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

  static async create(basicInfo: IBasicInfo): Promise<BasicInfo> {
    const document = await BasicModel.create(basicInfo);
    return new BasicInfo(document.toObject());
  }
}
