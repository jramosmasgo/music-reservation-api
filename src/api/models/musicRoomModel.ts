import { Optional } from "sequelize/types";

export interface MusicRoom {
  id: string;
  company: string;
  country: string;
  city: string;
  address: string;
  latitude: string;
  longitude: string;
  collaborator: string;
  phone: string;
  description: string;
}

export interface MusicRoomInput extends Optional<MusicRoom, "id"> {}
export interface MusicRoomOuput extends Required<MusicRoom> {}
