import { Response, Request, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { UserInput } from "../../models/userModel";
import getUserByEmailService from "../../services/users/getUserByEmailService";

const getUserByEmailController = async (
  req: Request<{ email: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getUserByEmailService(req.params.email);
    new ResponseApi<UserInput | null>({
      data: user,
      message: "user found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getUserByEmailController;
