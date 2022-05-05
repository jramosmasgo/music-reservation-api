import { Optional } from "sequelize/types";

export interface Image {
  id: string;
  url: string;
}

export interface ImageInput extends Optional<Image, "id"> {}
export interface ImageOuput extends Required<Image> {}
