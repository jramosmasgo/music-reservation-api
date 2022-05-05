import multer, { FileFilterCallback, MulterError } from "multer";
import { Request } from "express";

const storage = multer.memoryStorage();

const fileFilter =
  (fielType: string) =>
  async (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (file.mimetype.startsWith(fielType)) {
      cb(null, true);
    } else {
      cb(null, false);
      cb(new MulterError("LIMIT_UNEXPECTED_FILE", "image"));
    }
  };

const UploadFileOnMemory = (fileType: string, nameFile: string) =>
  multer({
    storage: storage,
    fileFilter: fileFilter(fileType),
  }).single(nameFile);
export default UploadFileOnMemory;
