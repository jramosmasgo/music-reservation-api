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
const updateUserData_1 = __importDefault(require("../../data/users/updateUserData"));
const uploadImageBase64ToCloudinaryService_1 = __importDefault(require("../images/uploadImageBase64ToCloudinaryService"));
const updateImageProfileService = (image, idUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const secure_url = yield (0, uploadImageBase64ToCloudinaryService_1.default)(image);
        const imageData = yield (0, createImageData_1.default)({ url: secure_url });
        return yield (0, updateUserData_1.default)({ profileImage: imageData.id }, idUser);
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "Update user data");
    }
});
exports.default = updateImageProfileService;
