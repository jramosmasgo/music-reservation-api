import createReservationData from "../../data/reservation/createReservationData";
import {
  ReservationInput,
  ReservationOuput,
} from "../../models/reservationModel";

const createReservationService = async (
  data: ReservationInput
): Promise<ReservationOuput> => {
  return await createReservationData(data);
};

export default createReservationService;
