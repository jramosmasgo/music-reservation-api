import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { MusicRommImageOuput } from "../../models/MusicRoomImagesModel";
import getAllMusicRoomImagesByFilterService from "../../services/music-room-images/getAllMusicRoomImageByFieldService";

const getAllImagesByIdRoomMusic = async (
  req: Request<{}, {}, { idRoomMusic: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getAllMusicRoomImagesByFilterService({
      idMusicRoom: req.body.idRoomMusic,
    });
    new ResponseApi<MusicRommImageOuput[]>({
      data: result,
      message: "music room images list",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getAllImagesByIdRoomMusic;
