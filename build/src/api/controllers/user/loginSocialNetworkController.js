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
const responseAPI_1 = __importDefault(require("../../core/responseAPI"));
const loginSocialNetworkService_1 = __importDefault(require("../../services/users/loginSocialNetworkService"));
const loginSocialNetworkController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.user.loginSocialNetwork = true;
        const token = yield (0, loginSocialNetworkService_1.default)(req.body.user);
        new responseAPI_1.default({
            data: token,
            message: "login success",
        }).sendSuccess(res);
    }
    catch (error) {
        next(error);
    }
});
exports.default = loginSocialNetworkController;
