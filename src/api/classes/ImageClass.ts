import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../../config/database";
import { ImageInput, ImageOuput, Image as IImage } from "../models/imageModel";

class Image extends Model<ImageOuput, ImageInput> implements IImage {
  public id: string;
  public url: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Image.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    url: {
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

export default Image;
