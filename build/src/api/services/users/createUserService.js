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
const ApplicationError_1 = require("../../core/ApplicationError");
const createImageData_1 = __importDefault(require("../../data/images/createImageData"));
const createUserData_1 = __importDefault(require("../../data/users/createUserData"));
const sendEmailService_1 = require("../email/sendEmailService");
const uploadImageBase64ToCloudinaryService_1 = __importDefault(require("../images/uploadImageBase64ToCloudinaryService"));
const loginUserService_1 = __importDefault(require("./loginUserService"));
const createUserService = (user, image) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (image) {
            const url = yield (0, uploadImageBase64ToCloudinaryService_1.default)(image);
            const resultUploadPhoto = yield (0, createImageData_1.default)({ url });
            user.profileImage = resultUploadPhoto.id;
        }
        const resultSave = yield (0, createUserData_1.default)(user);
        if (resultSave) {
            yield (0, sendEmailService_1.sendEmail)(resultSave.email, "Registro de cuenta", "register.hbs", {
                username: resultSave.fullname,
                url: `${process.env.URL_FRONTEND}/music-rooms`,
            });
        }
        return yield (0, loginUserService_1.default)(resultSave.email);
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message);
    }
});
exports.default = createUserService;
