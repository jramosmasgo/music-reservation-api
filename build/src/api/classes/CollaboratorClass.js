"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collaborator = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../config/database"));
class Collaborator extends sequelize_1.Model {
}
exports.Collaborator = Collaborator;
Collaborator.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    user: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    company: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    timestamps: true,
    sequelize: database_1.default,
    paranoid: true,
});
