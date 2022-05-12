import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { ReservationOuput } from "../../models/reservationModel";
import getReservationsByFilterService from "../../services/reservation/getReservationsByFilterService";

const getReservationsByIdMusicRoomController = async (
  req: Request<{ idMusicRoom: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getReservationsByFilterService({
      musicRoom: req.params.idMusicRoom,
    });
    new ResponseApi<ReservationOuput>({
      data: result,
      message: "reservations found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getReservationsByIdMusicRoomController;
