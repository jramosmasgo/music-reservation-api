"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const cloudinary_1 = __importDefault(require("./config/cloudinary"));
const database_1 = __importDefault(require("./config/database"));
const relations_1 = require("./config/relations");
database_1.default.sync({ alter: true }).then(() => {
    (0, relations_1.initRelations)();
    console.log("Database Conected");
});
(0, cloudinary_1.default)();
app_1.default.listen(app_1.default.get("port"), () => {
    console.log(`Server on port: ${app_1.default.get("port")}`);
});
