import { Optional } from "sequelize/types";

export interface Reservation {
  id: string;
  date: Date;
  endDate: Date;
  band: string;
  user?: string;
  musicRoom: string;
  state: number;
}

export interface ReservationInput
  extends Optional<Reservation, "id" | "user"> {}
export interface ReservationOuput extends Required<Reservation> {}
