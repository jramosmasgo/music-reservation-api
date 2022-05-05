import { Optional } from "sequelize/types";

export interface MusicRommImage {
  id: string;
  idImage: string;
  idMusicRoom: string;
}

export interface MusicRommImageInput extends Optional<MusicRommImage, "id"> {}
export interface MusicRommImageOuput extends Required<MusicRommImage> {}
