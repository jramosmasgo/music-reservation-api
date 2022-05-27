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
exports.uploadImageCloudinaryService = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const bufferFormat_1 = require("../../utils/bufferFormat");
const uploadImageCloudinaryService = (image) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { content } = (0, bufferFormat_1.bufferFormat)(image);
        const { secure_url, public_id } = yield cloudinary_1.default.v2.uploader.upload(content);
        return { secure_url, public_id };
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.uploadImageCloudinaryService = uploadImageCloudinaryService;
