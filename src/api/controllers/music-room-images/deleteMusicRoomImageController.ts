import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import deleteMusicRoomImageService from "../../services/music-room-images/deleteMusicRoomImageService";

const deleteMusicRoomImageController = async (
  req: Request<{}, {}, { idRoomMusic: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await deleteMusicRoomImageService(req.body.idRoomMusic);
    new ResponseApi<Boolean>({
      data: result,
      message: "music room image removed",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default deleteMusicRoomImageController;
