import { BasicInfo, IBasicInfo } from "@models/types";
import Express from "express";
import { StatusCodes } from "http-status-codes";

const routes = Express.Router();

routes.post(
  "/",
  async (
    req: Express.Request<any, any, IBasicInfo>,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    const body = req.body;

    try {
      const basicInfo = await BasicInfo.create(body);

      return res.status(StatusCodes.CREATED).json(basicInfo.toPlainObject());
    } catch (err) {
      return next(err);
    }
  }
);

export default routes;
