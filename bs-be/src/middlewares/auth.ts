import { BasicInfo } from "@models/types";
import Express from "express";

export async function loginCheck(
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) {
  const token = req.headers.authorization;
  try {
    const basic = await BasicInfo.getFromToken(token!);
    req.basic = basic.toPlainObject();

    return next();
  } catch (err) {
    return next(err);
  }
}
