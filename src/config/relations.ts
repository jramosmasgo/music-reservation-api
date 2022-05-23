import { Band } from "../api/classes/BandClass";
import { Collaborator } from "../api/classes/CollaboratorClass";
import Company from "../api/classes/CompanyClass";
import Image from "../api/classes/ImageClass";
import { MusicRoom } from "../api/classes/MusicRoomClass";
import { MusicRoomImage } from "../api/classes/MusicRoomImagesClass";
import { Reservation } from "../api/classes/ReservationClass";
import User from "../api/classes/UserClass";

export const initRelations = () => {
  User.hasOne(Image, {
    foreignKey: "id",
    sourceKey: "profileImage",
  });

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

  Collaborator.hasOne(User, {
    foreignKey: "id",
    sourceKey: "user",
  });

  Collaborator.hasOne(Company, {
    foreignKey: "id",
    sourceKey: "company",
  });

  MusicRoom.hasOne(Collaborator, {
    foreignKey: "id",
    sourceKey: "collaborator",
  });

  MusicRoom.hasOne(Company, {
    foreignKey: "id",
    sourceKey: "company",
  });

  MusicRoomImage.hasOne(Image, {
    foreignKey: "id",
    sourceKey: "idImage",
  });

  MusicRoomImage.hasOne(MusicRoom, {
    foreignKey: "id",
    sourceKey: "idMusicRoom",
  });

  Band.hasOne(Image, {
    foreignKey: "id",
    sourceKey: "logo",
  });

  Band.hasOne(Image, {
    foreignKey: "id",
    sourceKey: "coverImage",
  });

  Band.hasOne(User, {
    foreignKey: "id",
    sourceKey: "admin",
  });

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
};
