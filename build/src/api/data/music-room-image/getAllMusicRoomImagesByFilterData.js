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
const ImageClass_1 = __importDefault(require("../../classes/ImageClass"));
const MusicRoomImagesClass_1 = require("../../classes/MusicRoomImagesClass");
const ApplicationError_1 = require("../../core/ApplicationError");
const getAllMusicRoomsImageByFilter = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield MusicRoomImagesClass_1.MusicRoomImage.findAll({
            where: Object.assign({}, filter),
            include: [{ model: ImageClass_1.default }],
        });
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "serch music Room Images");
    }
});
exports.default = getAllMusicRoomsImageByFilter;
