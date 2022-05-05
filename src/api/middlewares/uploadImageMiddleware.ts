import { Request, Response, NextFunction } from "express";
import { MulterError } from "multer";
import { ApplicationError } from "../core/ApplicationError";
import UploadFileOnMemory from "../utils/uploadFileOnMemory";

const uploadImageMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  UploadFileOnMemory("image", "imageFile")(req, res, function (err) {
    if (err instanceof MulterError) {
      next(new ApplicationError(400, "File no image", "Upload Image"));
    } else if (err) {
      next(new ApplicationError(400, err.message, "Upload Image"));
    }
    next();
  });
};

export default uploadImageMiddleware;
