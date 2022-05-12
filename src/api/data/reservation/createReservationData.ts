import { Reservation } from "../../classes/ReservationClass";
import { ApplicationError } from "../../core/ApplicationError";
import {
  ReservationInput,
  ReservationOuput,
} from "../../models/reservationModel";

const createReservationData = async (
  data: ReservationInput
): Promise<ReservationOuput> => {
  try {
    return await Reservation.create(data);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "create reservation");
  }
};

export default createReservationData;
