import { Optional } from "sequelize/types";

export interface MusicRoom {
  id: string;
  name: string;
  company: string;
  country: string;
  city: string;
  address: string;
  collaborator: string;
  phone: string;
  description: string;
  priceHour: number;
  currencyWorld: string;
  openingHours: Date;
  closeHours: Date;
  isOpening: boolean;
}

export interface MusicRoomInput extends Optional<MusicRoom, "id"> {}
export interface MusicRoomOuput extends Required<MusicRoom> {}
