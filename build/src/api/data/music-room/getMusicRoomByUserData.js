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
const database_1 = __importDefault(require("../../../config/database"));
const MusicRoomClass_1 = require("../../classes/MusicRoomClass");
const ApplicationError_1 = require("../../core/ApplicationError");
const getMusicRoomByUserData = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = `SELECT mr.* FROM Companies c inner join MusicRooms mr on c.id = mr.company inner join Users u on c.property = u.id where u.id = "${idUser}"`;
        return yield database_1.default.query(query, {
            model: MusicRoomClass_1.MusicRoom,
            mapToModel: true,
        });
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "get music rooms");
    }
});
exports.default = getMusicRoomByUserData;
