import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { ReservationOuput } from "../../models/reservationModel";
import getReservationsByFilterService from "../../services/reservation/getReservationsByFilterService";

const getReservationsByIdUserController = async (
  req: Request<{}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idUser } = req.headers;
    const result = await getReservationsByFilterService({
      user: idUser as string,
    });
    new ResponseApi<ReservationOuput[]>({
      data: result,
      message: "reservations found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getReservationsByIdUserController;
