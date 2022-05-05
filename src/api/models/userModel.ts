import { Optional } from "sequelize/types";

export interface User {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  profileImage: string;
}

export interface UserInput extends Optional<User, "id"> {}
export interface UserOutput extends Required<User> {}
