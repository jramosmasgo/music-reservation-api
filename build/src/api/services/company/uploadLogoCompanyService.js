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
const getCompanyByFieldData_1 = __importDefault(require("../../data/company/getCompanyByFieldData"));
const updateCompanyData_1 = __importDefault(require("../../data/company/updateCompanyData"));
const createImageData_1 = __importDefault(require("../../data/images/createImageData"));
const uploadImageBase64ToCloudinaryService_1 = __importDefault(require("../images/uploadImageBase64ToCloudinaryService"));
const uploadLogoCompanyService = (image, idCompany) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companyFound = yield (0, getCompanyByFieldData_1.default)({ id: idCompany });
        const urlUploadLogo = yield (0, uploadImageBase64ToCloudinaryService_1.default)(image);
        const imageToCreate = {
            url: urlUploadLogo,
        };
        const resultCreateImageData = yield (0, createImageData_1.default)(imageToCreate);
        return (0, updateCompanyData_1.default)({ logo: resultCreateImageData.id }, companyFound.id);
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "upload logo company");
    }
});
exports.default = uploadLogoCompanyService;
