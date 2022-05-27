"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicRoom = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../config/database"));
class MusicRoom extends sequelize_1.Model {
}
exports.MusicRoom = MusicRoom;
MusicRoom.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    company: {
        type: sequelize_1.DataTypes.UUID,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    collaborator: {
        type: sequelize_1.DataTypes.UUID,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    priceHour: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    currencyWorld: {
        type: sequelize_1.DataTypes.STRING,
    },
    openingHours: {
        type: sequelize_1.DataTypes.DATE,
    },
    closeHours: {
        type: sequelize_1.DataTypes.DATE,
    },
    isOpening: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    timestamps: true,
    sequelize: database_1.default,
    paranoid: true,
});
