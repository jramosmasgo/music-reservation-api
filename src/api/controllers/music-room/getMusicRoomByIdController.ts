import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { MusicRoomOuput } from "../../models/musicRoomModel";
import getMusicRoomByFilterService from "../../services/music-room/getMusicRoomByFilterService";

const getMusicRoomsByIdController = async (
  req: Request<{ idMusicRoom: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getMusicRoomByFilterService({
      id: req.params.idMusicRoom,
    });
    new ResponseApi<MusicRoomOuput>({
      data: result,
      message: "music room found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getMusicRoomsByIdController;
