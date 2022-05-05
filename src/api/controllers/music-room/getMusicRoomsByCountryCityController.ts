import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { MusicRoomOuput } from "../../models/musicRoomModel";
import GetMusicRoomsByFilterService from "../../services/music-room/getMusicRoomsByFilterService";

const getMusicRoomsByCountryCityController = async (
  req: Request<{}, {}, { city: string; country: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await GetMusicRoomsByFilterService(req.body);
    new ResponseApi<MusicRoomOuput[]>({
      data: result,
      message: "music rooms found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getMusicRoomsByCountryCityController;
