"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = require("multer");
const ApplicationError_1 = require("../core/ApplicationError");
const uploadFileOnMemory_1 = __importDefault(require("../utils/uploadFileOnMemory"));
const uploadImageMiddleware = (req, res, next) => {
    (0, uploadFileOnMemory_1.default)("image", "imageFile")(req, res, function (err) {
        if (err instanceof multer_1.MulterError) {
            next(new ApplicationError_1.ApplicationError(400, "File no image", "Upload Image"));
        }
        else if (err) {
            next(new ApplicationError_1.ApplicationError(400, err.message, "Upload Image"));
        }
        next();
    });
};
exports.default = uploadImageMiddleware;
