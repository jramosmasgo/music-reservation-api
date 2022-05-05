import { Optional } from "sequelize/types";

export interface Company {
  id: string;
  name: string;
  logo: string;
  property: string;
  typeDoc: number;
  numberDoc: string;
  phone: string;
  state: number;
}

export interface CompanyInput extends Optional<Company, "id"> {}
export interface CompanyOuput extends Required<Company> {}
