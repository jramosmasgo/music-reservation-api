"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicRoomImage = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../config/database"));
class MusicRoomImage extends sequelize_1.Model {
}
exports.MusicRoomImage = MusicRoomImage;
MusicRoomImage.init({
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    idMusicRoom: {
        type: sequelize_1.DataTypes.UUID,
    },
    idImage: {
        type: sequelize_1.DataTypes.UUID,
    },
}, {
    timestamps: true,
    sequelize: database_1.default,
    paranoid: false,
});
