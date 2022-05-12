import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import {
  ReservationInput,
  ReservationOuput,
} from "../../models/reservationModel";
import createReservationService from "../../services/reservation/createReservationService";

const createReservationController = async (
  req: Request<{}, {}, { band: ReservationInput }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createReservationService(req.body.band);
    new ResponseApi<ReservationOuput>({
      data: result,
      message: "reservation created",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default createReservationController;
