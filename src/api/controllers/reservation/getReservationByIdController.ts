import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { ReservationOuput } from "../../models/reservationModel";
import getReservationByIdService from "../../services/reservation/getReservationByIdService";

const getReservationByIdController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getReservationByIdService(req.params.id);
    new ResponseApi<ReservationOuput>({
      data: result,
      message: "reservations found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getReservationByIdController;
