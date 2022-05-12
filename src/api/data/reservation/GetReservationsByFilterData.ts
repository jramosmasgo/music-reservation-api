import { Reservation } from "../../classes/ReservationClass";
import { ApplicationError } from "../../core/ApplicationError";
import { ReservationOuput } from "../../models/reservationModel";

const getReservationsByFilterData = async (
  filter: Object
): Promise<ReservationOuput[]> => {
  try {
    return await Reservation.findAll({ where: { ...filter } });
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "find reservations");
  }
};

export default getReservationsByFilterData;
