import { Optional } from "sequelize/types";

export interface Band {
  id: string;
  name: string;
  logo: string;
  coverImage: string;
  genre: string;
  type: number;
  admin: string;
}

export interface BandInput extends Optional<Band, "id"> {}
export interface BandOuput extends Required<Band> {}
