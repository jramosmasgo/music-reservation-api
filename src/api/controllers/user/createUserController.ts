import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { UserOutput } from "../../models/userModel";
import createUserService from "../../services/users/createUserService";

const createUserController = async (
  req: Request<{}, {}, UserOutput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userCreate = await createUserService(req.body);
    new ResponseApi<UserOutput>({
      message: "User created",
      data: userCreate,
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default createUserController;
