import Company from "../../classes/CompanyClass";
import { MusicRoom } from "../../classes/MusicRoomClass";
import { Reservation } from "../../classes/ReservationClass";
import User from "../../classes/UserClass";
import { ApplicationError } from "../../core/ApplicationError";
import { ReservationOuput } from "../../models/reservationModel";

const getReservationsByFilterData = async (
  filter: Object
): Promise<ReservationOuput[]> => {
  try {
    return await Reservation.findAll({
      where: { ...filter },
      include: [{ model: MusicRoom, include: [Company] }, { model: User }],
    });
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "find reservations");
  }
};

export default getReservationsByFilterData;
