import { IQuestion, Question } from "@models/types";
import Express from "express";
import { StatusCodes } from "http-status-codes";

const routes = Express.Router();

routes.patch(
  "/:id",
  async (
    req: Express.Request<any, any, IQuestion>,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    const { id } = req.params;
    const body = req.body;

    try {
      const question = await Question.getFromId(id);
      const newQuestion = await question.update(body);

      return res.status(StatusCodes.OK).json(newQuestion);
    } catch (err) {
      return next(err);
    }
  }
);

export default routes;
