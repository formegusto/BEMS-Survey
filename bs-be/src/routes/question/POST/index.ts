import { IQuestion, Question } from "@models/types";
import Express from "express";
import { StatusCodes } from "http-status-codes";

const routes = Express.Router();

routes.post(
  "/",
  async (
    req: Express.Request<any, any, IQuestion>,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    const body = req.body;
    try {
      const question = await Question.create(body);

      return res.status(StatusCodes.CREATED).json(question);
    } catch (err) {
      return next(err);
    }
  }
);

export default routes;
