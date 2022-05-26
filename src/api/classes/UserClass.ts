import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../../config/database";
import { UserInput, UserOutput, User as IUser } from "../models/userModel";
import Image from "./ImageClass";

class User extends Model<UserOutput, UserInput> implements IUser {
  public id: string;
  public fullname: string;
  public email: string;
  public phone: string;
  public profileImage: string;
  public uid: string;
  public emailVerified: boolean;
  public loginSocialNetwork: boolean;
  public companyCreator: boolean;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profileImage: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    loginSocialNetwork: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    companyCreator: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    indexes: [{ unique: true, fields: ["email"] }],
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

export default User;
