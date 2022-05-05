import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { MusicRoomOuput } from "../../models/musicRoomModel";
import updateMusicRoomService from "../../services/music-room/updateMusicRoomService";

const updateMusicRoomController = async (
  req: Request<{}, {}, MusicRoomOuput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await updateMusicRoomService(req.body);
    new ResponseApi<MusicRoomOuput>({
      data: result,
      message: "music room updated",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default updateMusicRoomController;
