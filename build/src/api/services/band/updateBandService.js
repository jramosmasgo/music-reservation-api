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
const updateBandData_1 = __importDefault(require("../../data/band/updateBandData"));
const createImageData_1 = __importDefault(require("../../data/images/createImageData"));
const uploadImageBase64ToCloudinaryService_1 = __importDefault(require("../images/uploadImageBase64ToCloudinaryService"));
const updateBandService = (data, logo, coverImage) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (logo) {
            const url = yield (0, uploadImageBase64ToCloudinaryService_1.default)(logo);
            const { id } = yield (0, createImageData_1.default)({ url });
            data.logo = id;
        }
        if (coverImage) {
            const url = yield (0, uploadImageBase64ToCloudinaryService_1.default)(coverImage);
            const { id } = yield (0, createImageData_1.default)({ url });
            data.coverImage = id;
        }
        return yield (0, updateBandData_1.default)(data);
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "update band data");
    }
});
exports.default = updateBandService;
