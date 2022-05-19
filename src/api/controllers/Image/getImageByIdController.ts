import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { ImageOuput } from "../../models/imageModel";
import getImageByIdService from "../../services/images/getImageByIdService";

const getImageByIdController = async (
  req: Request<{ idImage: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: ImageOuput | null = await getImageByIdService(
      req.params.idImage
    );
    new ResponseApi<ImageOuput | null>({
      data: result,
      message: "image found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getImageByIdController;
