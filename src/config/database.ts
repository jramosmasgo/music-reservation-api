import { Dialect, Sequelize } from "sequelize";
const enviroment = process.env.NODE_ENV;

const databaseName = `${process.env.DB_NAME}`;

const databaseUser =
  enviroment == "test"
    ? (process.env.DB_USER_TEST as string)
    : (process.env.DB_USER as string);

const databasePassword =
  enviroment == "test" ? process.env.DB_PASSWORD_TEST : process.env.DB_PASSWORD;

const databaseHost =
  enviroment == "test" ? process.env.DB_HOST_TEST : process.env.DB_HOST;

const sequelizeConnection = new Sequelize(
  databaseName,
  databaseUser,
  databasePassword,
  {
    logging: false,
    host: databaseHost,
    dialect: process.env.DB_DRIVER as Dialect,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

export default sequelizeConnection;
