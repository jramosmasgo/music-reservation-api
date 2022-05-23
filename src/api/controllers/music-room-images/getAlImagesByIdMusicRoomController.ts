import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { MusicRommImageOuput } from "../../models/MusicRoomImagesModel";
import getAllMusicRoomImagesByFilterService from "../../services/music-room-images/getAllMusicRoomImageByFieldService";

const getAllImagesByIdRoomMusic = async (
  req: Request<{ idMusicRoom: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getAllMusicRoomImagesByFilterService({
      idMusicRoom: req.params.idMusicRoom,
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
