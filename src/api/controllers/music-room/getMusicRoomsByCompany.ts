import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { MusicRoomOuput } from "../../models/musicRoomModel";
import GetMusicRoomsByFilterService from "../../services/music-room/getMusicRoomsByFilterService";

const getMusicRoomsByCompany = async (
  req: Request<{ idCompany: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await GetMusicRoomsByFilterService({
      company: req.params.idCompany,
    });
    new ResponseApi<MusicRoomOuput[]>({
      data: result,
      message: "music rooms found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getMusicRoomsByCompany;
