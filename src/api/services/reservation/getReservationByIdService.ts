import getReservationByFieldData from "../../data/reservation/getReservationByFieldData";
import { ReservationOuput } from "../../models/reservationModel";

const getReservationByIdService = async (
  id: string
): Promise<ReservationOuput> => {
  return await getReservationByFieldData({ id });
};

export default getReservationByIdService;
