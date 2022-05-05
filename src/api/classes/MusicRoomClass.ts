import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../../config/database";
import {
  MusicRoomInput,
  MusicRoomOuput,
  MusicRoom as IMusicRoom,
} from "../models/musicRoomModel";
import { Collaborator } from "./CollaboratorClass";
import Company from "./CompanyClass";

export class MusicRoom
  extends Model<MusicRoomOuput, MusicRoomInput>
  implements IMusicRoom
{
  public id: string;
  public company: string;
  public address: string;
  public collaborator: string;
  public phone: string;
  public country: string;
  public city: string;
  public longitude: string;
  public latitude: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

MusicRoom.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    company: {
      type: DataTypes.UUID,
    },
    country: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    collaborator: {
      type: DataTypes.UUID,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

MusicRoom.hasOne(Collaborator, {
  foreignKey: "id",
  sourceKey: "collaborator",
});

MusicRoom.hasOne(Company, {
  foreignKey: "id",
  sourceKey: "company",
});
