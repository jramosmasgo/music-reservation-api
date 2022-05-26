import { Reservation } from "../../classes/ReservationClass";
import { ApplicationError } from "../../core/ApplicationError";
import { ReservationOuput } from "../../models/reservationModel";

const updateReservationData = async (
  data: Object,
  id: string
): Promise<ReservationOuput> => {
  try {
    const foundReservation = await Reservation.findOne({
      where: { id: id },
    });
    if (!foundReservation) throw new Error("Reservation not found");

    await Reservation.update(data, {
      where: { id: foundReservation.id },
    });

    const foundReservationNew = await Reservation.findOne({
      where: { id: id },
    });

    if (!foundReservationNew) throw new Error("");

    return foundReservationNew;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "update reservation");
  }
};

export default updateReservationData;
