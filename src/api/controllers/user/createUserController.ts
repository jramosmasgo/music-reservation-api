import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { UserOutput } from "../../models/userModel";
import createUserService from "../../services/users/createUserService";

const createUserController = async (
  req: Request<{}, {}, { user: UserOutput; image: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userCreate = await createUserService(req.body.user, req.body.image);
    new ResponseApi<string>({
      message: "User created",
      data: userCreate,
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default createUserController;
