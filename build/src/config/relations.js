"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRelations = void 0;
const BandClass_1 = require("../api/classes/BandClass");
const CollaboratorClass_1 = require("../api/classes/CollaboratorClass");
const CompanyClass_1 = __importDefault(require("../api/classes/CompanyClass"));
const ImageClass_1 = __importDefault(require("../api/classes/ImageClass"));
const MusicRoomClass_1 = require("../api/classes/MusicRoomClass");
const MusicRoomImagesClass_1 = require("../api/classes/MusicRoomImagesClass");
const ReservationClass_1 = require("../api/classes/ReservationClass");
const UserClass_1 = __importDefault(require("../api/classes/UserClass"));
const initRelations = () => {
    UserClass_1.default.hasOne(ImageClass_1.default, {
        foreignKey: "id",
        sourceKey: "profileImage",
    });
    CompanyClass_1.default.hasOne(ImageClass_1.default, {
        foreignKey: "id",
        sourceKey: "logo",
    });
    CompanyClass_1.default.hasOne(ImageClass_1.default, {
        foreignKey: "id",
        sourceKey: "validationDoc",
    });
    CompanyClass_1.default.hasOne(UserClass_1.default, {
        foreignKey: "id",
        sourceKey: "property",
    });
    CollaboratorClass_1.Collaborator.hasOne(UserClass_1.default, {
        foreignKey: "id",
        sourceKey: "user",
    });
    CollaboratorClass_1.Collaborator.hasOne(CompanyClass_1.default, {
        foreignKey: "id",
        sourceKey: "company",
    });
    MusicRoomClass_1.MusicRoom.hasOne(CollaboratorClass_1.Collaborator, {
        foreignKey: "id",
        sourceKey: "collaborator",
    });
    MusicRoomClass_1.MusicRoom.hasOne(CompanyClass_1.default, {
        foreignKey: "id",
        sourceKey: "company",
    });
    MusicRoomImagesClass_1.MusicRoomImage.hasOne(ImageClass_1.default, {
        foreignKey: "id",
        sourceKey: "idImage",
    });
    MusicRoomImagesClass_1.MusicRoomImage.hasOne(MusicRoomClass_1.MusicRoom, {
        foreignKey: "id",
        sourceKey: "idMusicRoom",
    });
    BandClass_1.Band.hasOne(ImageClass_1.default, {
        foreignKey: "id",
        sourceKey: "logo",
    });
    BandClass_1.Band.hasOne(ImageClass_1.default, {
        foreignKey: "id",
        sourceKey: "coverImage",
    });
    BandClass_1.Band.hasOne(UserClass_1.default, {
        foreignKey: "id",
        sourceKey: "admin",
    });
    ReservationClass_1.Reservation.hasOne(UserClass_1.default, {
        foreignKey: "id",
        sourceKey: "user",
    });
    ReservationClass_1.Reservation.hasOne(BandClass_1.Band, {
        foreignKey: "id",
        sourceKey: "band",
    });
    ReservationClass_1.Reservation.hasOne(MusicRoomClass_1.MusicRoom, {
        foreignKey: "id",
        sourceKey: "musicRoom",
    });
};
exports.initRelations = initRelations;
