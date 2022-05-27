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
const findUserDataByField_1 = __importDefault(require("../../data/users/findUserDataByField"));
const token_1 = require("../../utils/token");
const loginUserService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield (0, findUserDataByField_1.default)({ email });
    const token = (0, token_1.createAuthToken)({ idUser: userFound === null || userFound === void 0 ? void 0 : userFound.id });
    return token;
});
exports.default = loginUserService;
