import { Response, Request, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { UserOutput } from "../../models/userModel";
import updateImageProfileService from "../../services/users/updateImageProfileService";

const updateImageProfileController = async (
  req: Request<{}, {}, { image: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idUser } = req.headers;
    const result = await updateImageProfileService(
      req.body.image,
      idUser as string
    );
    new ResponseApi<UserOutput>({
      data: result,
      message: "user updated",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default updateImageProfileController;
