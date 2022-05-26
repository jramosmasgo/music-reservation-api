import updateReservationData from "../../data/reservation/updateReservationData";
import { ReservationOuput } from "../../models/reservationModel";

const updateReservationService = async (
  data: Object,
  id: string
): Promise<ReservationOuput> => {
  return await updateReservationData(data, id);
};

export default updateReservationService;
