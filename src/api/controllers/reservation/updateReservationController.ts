import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { ReservationOuput } from "../../models/reservationModel";
import updateReservationService from "../../services/reservation/updateReservationService";

const updateReservationController = async (
  req: Request<{}, {}, { band: ReservationOuput }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await updateReservationService(req.body.band);
    new ResponseApi<ReservationOuput>({
      data: result,
      message: "reservation updated",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default updateReservationController;
