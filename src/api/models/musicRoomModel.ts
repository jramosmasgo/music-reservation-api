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
}

export interface MusicRoomInput extends Optional<MusicRoom, "id"> {}
export interface MusicRoomOuput extends Required<MusicRoom> {}
