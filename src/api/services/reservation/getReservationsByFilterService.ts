import getReservationByFieldData from "../../data/reservation/getReservationByFieldData";
import getReservationsByFilterData from "../../data/reservation/GetReservationsByFilterData";
import { ReservationOuput } from "../../models/reservationModel";

const getReservationsByFilterService = async (
  filter: Object
): Promise<ReservationOuput> => {
  return await getReservationByFieldData(filter);
};

export default getReservationsByFilterService;
