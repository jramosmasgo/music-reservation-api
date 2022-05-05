import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../core/ApplicationError";
import { validateToken } from "../utils/token";

const tokenValidationMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return next(
        new ApplicationError(401, "No token provided", "Token Error")
      );
    }

    const { idUser } = validateToken(authorization.replace("Bearer ", ""));

    if (!idUser)
      return next(new ApplicationError(401, "Unvalid token", "Unauthorized"));

    req.headers.idUser = idUser;
    return next();
  } catch (error: any) {
    if (error.message === "jwt expired")
      return next(new ApplicationError(401, error.message, "Unauthorized"));
    return next(error);
  }
};

export default tokenValidationMiddleware;
