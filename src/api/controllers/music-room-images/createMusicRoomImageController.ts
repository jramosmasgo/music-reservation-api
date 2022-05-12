import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { MusicRommImageOuput } from "../../models/MusicRoomImagesModel";
import createMusicRoomImageService from "../../services/music-room-images/createMusicRoomImageSevice";

const createMusicRoomImageController = async (
  req: Request<{}, {}, { idRoomMusic: string; image: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createMusicRoomImageService(
      req.body.image,
      req.body.idRoomMusic
    );
    new ResponseApi<MusicRommImageOuput>({
      data: result,
      message: "music room Image created",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default createMusicRoomImageController;
