import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../../config/database";
import {
  BandMemberInput,
  BandMemberOuput,
  BandMember as IBandMember,
} from "../models/bandMemberModel";

export class BandMember
  extends Model<BandMemberOuput, BandMemberInput>
  implements IBandMember
{
  public id: string;
  public band: string;
  public user: string;
  public state: number;
}

BandMember.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    band: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    user: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);
