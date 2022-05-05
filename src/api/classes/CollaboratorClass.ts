import { Model, DataTypes } from "sequelize";
import sequelizeConnection from "../../config/database";
import {
  CollaboratorInput,
  CollaboratorOuput,
  Collaborator as ICollaborator,
} from "../models/collaboratorModel";
import Company from "./CompanyClass";
import User from "./UserClass";

export class Collaborator
  extends Model<CollaboratorOuput, CollaboratorInput>
  implements ICollaborator
{
  public user: string;
  public company: string;
  public id: string;
  public state: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Collaborator.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    company: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    state: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

Collaborator.hasOne(User, {
  foreignKey: "id",
  sourceKey: "user",
});

Collaborator.hasOne(Company, {
  foreignKey: "id",
  sourceKey: "company",
});
