import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { MusicRoomOuput } from "../../models/musicRoomModel";
import GetMusicRoomsByFilterService from "../../services/music-room/getMusicRoomsByFilterService";

const getAllMusicRoomsController = async (
  _req: Request<{}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await GetMusicRoomsByFilterService({});
    new ResponseApi<MusicRoomOuput[]>({
      data: result,
      message: "music rooms found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getAllMusicRoomsController;
