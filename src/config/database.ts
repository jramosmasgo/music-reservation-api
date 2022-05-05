import { Dialect, Sequelize } from "sequelize";

const databaseName = process.env.DB_NAME as string;
const databaseUser = process.env.DB_USER as string;
const databasePassword = process.env.DB_PASSWORD;

const sequelizeConnection = new Sequelize(
  databaseName,
  databaseUser,
  databasePassword,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER as Dialect,
  }
);

export default sequelizeConnection;
