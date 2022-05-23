import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../../config/database";
import User from "./UserClass";
import {
  ReservationInput,
  ReservationOuput,
  Reservation as IReservation,
} from "../models/reservationModel";
import { Band } from "./BandClass";
import { MusicRoom } from "./MusicRoomClass";

export class Reservation
  extends Model<ReservationOuput, ReservationInput>
  implements IReservation
{
  public id: string;
  public date: Date;
  public endDate: Date;
  public band: string;
  public user: string;
  public musicRoom: string;
  public state: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Reservation.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    band: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    user: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    musicRoom: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true, sequelize: sequelizeConnection, paranoid: true }
);

Reservation.hasOne(User, {
  foreignKey: "id",
  sourceKey: "user",
});

Reservation.hasOne(Band, {
  foreignKey: "id",
  sourceKey: "band",
});

Reservation.hasOne(MusicRoom, {
  foreignKey: "id",
  sourceKey: "musicRoom",
});
