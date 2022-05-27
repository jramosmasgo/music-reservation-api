"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Band = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../config/database"));
class Band extends sequelize_1.Model {
}
exports.Band = Band;
Band.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    logo: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
    },
    coverImage: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
    },
    genre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    admin: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: database_1.default,
    paranoid: true,
});
