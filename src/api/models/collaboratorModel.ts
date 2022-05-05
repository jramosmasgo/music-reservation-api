import { Optional } from "sequelize/types";

export interface Collaborator {
  id: string;
  user: string;
  company: string;
  state: number;
}

export interface CollaboratorInput extends Optional<Collaborator, "id"> {}
export interface CollaboratorOuput extends Required<Collaborator> {}
