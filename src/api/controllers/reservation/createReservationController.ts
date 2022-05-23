import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import {
  ReservationInput,
  ReservationOuput,
} from "../../models/reservationModel";
import createReservationService from "../../services/reservation/createReservationService";

const createReservationController = async (
  req: Request<{}, {}, ReservationInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const { idUser } = req.headers;
    req.body.user = idUser as string;
    const result = await createReservationService(req.body);
    new ResponseApi<ReservationOuput>({
      data: result,
      message: "reservation created",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default createReservationController;
