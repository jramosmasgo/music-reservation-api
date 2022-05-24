import { Response, Request, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { UserInput } from "../../models/userModel";
import loginSocialNetworkService from "../../services/users/loginSocialNetworkService";

const loginSocialNetworkController = async (
  req: Request<{}, {}, { user: UserInput }>,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body.user.loginSocialNetwork = true;
    const token = await loginSocialNetworkService(req.body.user);
    new ResponseApi<string>({
      data: token,
      message: "login success",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default loginSocialNetworkController;
