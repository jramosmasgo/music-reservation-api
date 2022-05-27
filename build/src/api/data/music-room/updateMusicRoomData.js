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
const MusicRoomClass_1 = require("../../classes/MusicRoomClass");
const ApplicationError_1 = require("../../core/ApplicationError");
const getMusicRoomByFilterData_1 = __importDefault(require("./getMusicRoomByFilterData"));
const updateMusicRoomData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const musicroom = yield (0, getMusicRoomByFilterData_1.default)({ id: data.id });
        if (!musicroom)
            throw new Error("music room not found");
        const resultUpdate = yield MusicRoomClass_1.MusicRoom.update(data, {
            where: { id: musicroom.id },
        });
        if (resultUpdate.length <= 0)
            throw new Error("error on update musci room");
        return data;
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "udate music room");
    }
});
exports.default = updateMusicRoomData;
