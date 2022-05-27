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
Object.defineProperty(exports, "__esModule", { value: true });
const MusicRoomImagesClass_1 = require("../../classes/MusicRoomImagesClass");
const ApplicationError_1 = require("../../core/ApplicationError");
const deleteMusicRoomImageData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield MusicRoomImagesClass_1.MusicRoomImage.destroy({ where: { id: id } });
        if (result <= 0)
            throw new Error("Error on remove Music Romm Image");
        return true;
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "create Music Room");
    }
});
exports.default = deleteMusicRoomImageData;
