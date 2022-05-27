import createReservationData from "../../data/reservation/createReservationData";
import findUserDataByField from "../../data/users/findUserDataByField";
import {
  ReservationInput,
  ReservationOuput,
} from "../../models/reservationModel";
import { sendEmail } from "../email/sendEmailService";

const createReservationService = async (
  data: ReservationInput
): Promise<ReservationOuput> => {
  const user = await findUserDataByField({ id: data.user });

  if (user) {
    await sendEmail(
      user.email,
      "Reserva Registrada",
      "registeredReservation.hbs",
      {
        username: user.fullname,
        url: `${process.env.URL_FRONTED}/reservations/${data.user}`,
      }
    );
  }
  return await createReservationData(data);
};

export default createReservationService;
