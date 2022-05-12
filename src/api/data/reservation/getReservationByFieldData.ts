import { Reservation } from "../../classes/ReservationClass";
import { ApplicationError } from "../../core/ApplicationError";
import { ReservationOuput } from "../../models/reservationModel";

const getReservationByFieldData = async (
  field: Object
): Promise<ReservationOuput> => {
  try {
    const reservationFound = await Reservation.findOne({ where: { ...field } });
    if (!reservationFound) throw new Error("Reservation not found");
    return reservationFound;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "find reservation");
  }
};

export default getReservationByFieldData;
