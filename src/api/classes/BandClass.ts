import { Model, DataTypes } from "sequelize";
import sequelizeConnection from "../../config/database";
import { BandInput, BandOuput, Band as IBand } from "../models/bandModel";
import Image from "./ImageClass";
import User from "./UserClass";

export class Band extends Model<BandOuput, BandInput> implements IBand {
  public id: string;
  public name: string;
  public logo: string;
  public coverImage: string;
  public genre: string;
  public type: number;
  public admin: string;
}

Band.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    coverImage: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    admin: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);
