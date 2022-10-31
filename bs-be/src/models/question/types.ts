import { ResponseError } from "@routes/error";
import { StatusCodes } from "http-status-codes";
import _ from "lodash";
import { Schema } from "mongoose";
import { QuestionModel } from ".";

export interface IQuestion {
  _id?: Schema.Types.ObjectId | string;
  question: string;
  values: number[];
  sequence?: number;
  type?: string;
}

export class Question implements IQuestion {
  _id?: Schema.Types.ObjectId | string;
  question!: string;
  values!: number[];
  sequence?: number;
  type?: string;

  constructor(document: IQuestion) {
    Object.assign(this, document);
  }

  toPlainObject() {
    return _.toPlainObject(this);
  }

  async update(question: IQuestion) {
    await QuestionModel.updateOne({ _id: this._id }, question);

    return Question.getFromId(this._id as string);
  }

  static async getFromId(id: string): Promise<Question> {
    const document = await QuestionModel.findById(id);

    if (!document)
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "질문지 정보가 존재하지 않습니다."
      );

    return new Question(document.toObject());
  }

  static async getList(): Promise<IQuestion[]> {
    return await QuestionModel.find({}, {}, { sort: { sequence: 1 } });
  }

  static async create(question: IQuestion): Promise<Question> {
    const document = await QuestionModel.create(question);
    return new Question(document.toObject());
  }
}
