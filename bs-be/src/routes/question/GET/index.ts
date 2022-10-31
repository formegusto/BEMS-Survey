import { Question } from "@models/types";
import Express from "express";
import { StatusCodes } from "http-status-codes";
import _ from "lodash";

const routes = Express.Router();

routes.get(
  "/",
  async (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    try {
      const questions = await Question.getList();

      return res.status(StatusCodes.OK).json(questions);
    } catch (err) {
      return next(err);
    }
  }
);

routes.get(
  "/type",
  async (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    try {
      const questions = await Question.getList();

      return res
        .status(StatusCodes.OK)
        .json(_.uniq(_.map(questions, ({ type }) => type)));
    } catch (err) {
      return next(err);
    }
  }
);

export default routes;
