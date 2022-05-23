import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { MusicRoomOuput } from "../../models/musicRoomModel";
import getMusicRoomByUserService from "../../services/music-room/getMusicRoomsByUserService";

const getMusicRoomsByUserController = async (
  req: Request<{ userid: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idUser } = req.headers;
    const result = await getMusicRoomByUserService(idUser as string);
    new ResponseApi<MusicRoomOuput[]>({
      data: result,
      message: "music rooms found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getMusicRoomsByUserController;
