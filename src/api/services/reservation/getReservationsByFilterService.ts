import getReservationsByFilterData from "../../data/reservation/GetReservationsByFilterData";
import { ReservationOuput } from "../../models/reservationModel";

const getReservationsByFilterService = async (
  filter: Object
): Promise<ReservationOuput[]> => {
  return await getReservationsByFilterData(filter);
};

export default getReservationsByFilterService;
