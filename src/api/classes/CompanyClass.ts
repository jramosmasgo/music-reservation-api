import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../../config/database";
import {
  CompanyOuput,
  CompanyInput,
  Company as ICompany,
} from "../models/companyModel";
import Image from "./ImageClass";
import User from "./UserClass";

class Company extends Model<CompanyOuput, CompanyInput> implements ICompany {
  public id: string;
  public name: string;
  public logo: string;
  public property: string;
  public validationDoc: string;
  public numberDoc: string;
  public phone: string;
  public state: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Company.init(
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
    property: {
      type: DataTypes.UUID,
    },
    validationDoc: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    numberDoc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
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

Company.hasOne(Image, {
  foreignKey: "id",
  sourceKey: "logo",
});

Company.hasOne(Image, {
  foreignKey: "id",
  sourceKey: "validationDoc",
});

Company.hasOne(User, {
  foreignKey: "id",
  sourceKey: "property",
});

export default Company;
