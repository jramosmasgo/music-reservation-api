import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../../config/database";
import {
  MusicRommImageInput,
  MusicRommImageOuput,
  MusicRommImage as IMusicRommImage,
} from "../models/MusicRoomImagesModel";
import Image from "./ImageClass";
import { MusicRoom } from "./MusicRoomClass";

export class MusicRommImage
  extends Model<MusicRommImageOuput, MusicRommImageInput>
  implements IMusicRommImage
{
  public id: string;
  public idMusicRoom: string;
  public idImage: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

MusicRommImage.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    idMusicRoom: {
      type: DataTypes.UUID,
    },
    idImage: {
      type: DataTypes.UUID,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: false,
  }
);

MusicRommImage.hasOne(Image, {
  foreignKey: "id",
  sourceKey: "idImage",
});

MusicRommImage.hasOne(MusicRoom, {
  foreignKey: "id",
  sourceKey: "idMusicRoom",
});
