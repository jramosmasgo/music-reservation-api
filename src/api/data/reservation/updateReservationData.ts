import { Reservation } from "../../classes/ReservationClass";
import { ApplicationError } from "../../core/ApplicationError";
import { ReservationOuput } from "../../models/reservationModel";

const updateReservationData = async (
  data: ReservationOuput
): Promise<ReservationOuput> => {
  try {
    const foundReservation = await Reservation.findOne({
      where: { id: data.id },
    });
    if (!foundReservation) throw new Error("Reservation not found");
    const resultUpdate = await Reservation.update(data, {
      where: { id: foundReservation.id },
    });
    if (resultUpdate.length <= 0)
      throw new Error("Reservation error on update");
    return data;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "update reservation");
  }
};

export default updateReservationData;
