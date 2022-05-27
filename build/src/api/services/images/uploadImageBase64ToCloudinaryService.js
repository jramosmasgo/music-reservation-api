"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = __importDefault(require("cloudinary"));
const ApplicationError_1 = require("../../core/ApplicationError");
const uploadImageBase64ToCloudinaryService = (imageBase64) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { secure_url } = yield cloudinary_1.default.v2.uploader.upload(imageBase64);
        return secure_url;
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "upload image");
    }
});
exports.default = uploadImageBase64ToCloudinaryService;
