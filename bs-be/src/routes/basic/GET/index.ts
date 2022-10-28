import { BasicInfo } from "@models/types";
import { ResponseError } from "@routes/error";
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
    const token = req.headers["authorization"];

    try {
      if (!token) {
        throw new ResponseError(
          StatusCodes.UNAUTHORIZED,
          "인증 정보가 확인되지 않습니다."
        );
      }

      const basicInfo = await BasicInfo.getFromToken(token);
      return res.status(StatusCodes.OK).json(_.toPlainObject(basicInfo));
    } catch (err) {
      return next(err);
    }
  }
);

export default routes;
