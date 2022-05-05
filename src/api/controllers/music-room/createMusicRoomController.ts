import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { MusicRoomInput, MusicRoomOuput } from "../../models/musicRoomModel";
import createMusicRoomService from "../../services/music-room/createMusicRoomService";

const createMusicRoomController = async (
  req: Request<{}, {}, MusicRoomInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createMusicRoomService(req.body);
    new ResponseApi<MusicRoomOuput>({
      data: result,
      message: "music room created",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default createMusicRoomController;
