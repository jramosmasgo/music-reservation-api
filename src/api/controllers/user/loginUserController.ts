import { Response, Request, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import loginUserService from "../../services/users/loginUserService";

const loginUserController = async (
  req: Request<{}, {}, { email: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await loginUserService(req.body.email);
    new ResponseApi<string>({
      data: token,
      message: "login success",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default loginUserController;
