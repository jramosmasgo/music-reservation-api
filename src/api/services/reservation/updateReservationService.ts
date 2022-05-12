import updateReservationData from "../../data/reservation/updateReservationData";
import { ReservationOuput } from "../../models/reservationModel";

const updateReservationService = async (
  data: ReservationOuput
): Promise<ReservationOuput> => {
  return await updateReservationData(data);
};

export default updateReservationService;
