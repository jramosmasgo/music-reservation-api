"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../config/database"));
class Reservation extends sequelize_1.Model {
}
exports.Reservation = Reservation;
Reservation.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    band: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
    },
    user: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    musicRoom: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { timestamps: true, sequelize: database_1.default, paranoid: true });
