import { Optional } from "sequelize/types";
export interface User {
  id: string;
  uid: string;
  fullname: string;
  email: string;
  phone: string;
  emailVerified: boolean;
  profileImage: string;
  loginSocialNetwork: boolean;
  companyCreator: boolean;
}

export interface UserInput extends Optional<User, "id"> {}
export interface UserOutput extends Required<User> {}
