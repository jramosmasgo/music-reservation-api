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
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

User.hasOne(Image, {
  foreignKey: "id",
  sourceKey: "profileImage",
});

export default User;
