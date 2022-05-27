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
const createImageData_1 = __importDefault(require("../../data/images/createImageData"));
const createUserData_1 = __importDefault(require("../../data/users/createUserData"));
const findUserDataByField_1 = __importDefault(require("../../data/users/findUserDataByField"));
const token_1 = require("../../utils/token");
const sendEmailService_1 = require("../email/sendEmailService");
const uploadImageBase64ToCloudinaryService_1 = __importDefault(require("../images/uploadImageBase64ToCloudinaryService"));
const loginSocialNetworkService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userFound = yield (0, findUserDataByField_1.default)({ email: user.email });
        if (!userFound) {
            if (user.profileImage) {
                const url = yield (0, uploadImageBase64ToCloudinaryService_1.default)(user.profileImage);
                const resultUploadPhoto = yield (0, createImageData_1.default)({ url });
                user.profileImage = resultUploadPhoto.id;
            }
            userFound = yield (0, createUserData_1.default)(user);
            if (userFound) {
                yield (0, sendEmailService_1.sendEmail)(userFound.email, "Registro de cuenta", "register.hbs", {
                    username: userFound.fullname,
                    url: `${process.env.URL_FRONTEND}/music-rooms`,
                });
            }
        }
        const token = (0, token_1.createAuthToken)({ idUser: userFound.id });
        return token;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.default = loginSocialNetworkService;
