"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const enviroment = process.env.NODE_ENV;
const databaseName = `${process.env.DB_NAME}`;
const databaseUser = enviroment == "test"
    ? process.env.DB_USER_TEST
    : process.env.DB_USER;
const databasePassword = enviroment == "test" ? process.env.DB_PASSWORD_TEST : process.env.DB_PASSWORD;
const databaseHost = enviroment == "test" ? process.env.DB_HOST_TEST : process.env.DB_HOST;
const sequelizeConnection = new sequelize_1.Sequelize(databaseName, databaseUser, databasePassword, {
    logging: false,
    host: databaseHost,
    dialect: process.env.DB_DRIVER,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
exports.default = sequelizeConnection;
