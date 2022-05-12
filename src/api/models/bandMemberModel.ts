import { Optional } from "sequelize/types";

export interface BandMember {
  id: string;
  user: string;
  band: string;
  state: number;
}

export interface BandMemberInput extends Optional<BandMember, "id"> {}
export interface BandMemberOuput extends Required<BandMember> {}
