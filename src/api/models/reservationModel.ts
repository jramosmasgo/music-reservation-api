import { Optional } from "sequelize/types";

export interface Reservation {
  id: string;
  date: Date;
  band: string;
  user: string;
  musicRoom: string;
  state: number;
}

export interface ReservationInput extends Optional<Reservation, "id"> {}
export interface ReservationOuput extends Required<Reservation> {}
