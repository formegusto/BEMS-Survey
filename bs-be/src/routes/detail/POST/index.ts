import { Monitor } from "@models/types";
import Express from "express";
import { StatusCodes } from "http-status-codes";

const routes = Express.Router();

routes.post(
  "/",
  async (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    try {
      const token = req.headers["authorization"];
      const basic = req.basic;
      const monitor = await Monitor.getFromToken(token!);
      await monitor.setDone();

      return res.status(StatusCodes.CREATED).json();
    } catch (err) {
      return next(err);
    }
  }
);

export default routes;
