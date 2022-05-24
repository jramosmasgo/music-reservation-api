import { Response, Request, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { UserOutput } from "../../models/userModel";
import updateUserService from "../../services/users/updateUserService";

const updateUserController = async (
  req: Request<{}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idUser } = req.headers;
    const result = await updateUserService({ ...req.body }, idUser as string);
    new ResponseApi<UserOutput>({
      data: result,
      message: "user updated",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default updateUserController;
