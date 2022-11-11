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
      const token = await basicInfo.getToken();

      return res.status(StatusCodes.CREATED).json({ token });
    } catch (err) {
      console.error(err);
      return next(err);
    }
  }
);

export default routes;
