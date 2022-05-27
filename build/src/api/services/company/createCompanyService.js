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
const CollaboratorClass_1 = require("../../classes/CollaboratorClass");
const ApplicationError_1 = require("../../core/ApplicationError");
const createCompanyData_1 = __importDefault(require("../../data/company/createCompanyData"));
const createImageData_1 = __importDefault(require("../../data/images/createImageData"));
const uploadImageBase64ToCloudinaryService_1 = __importDefault(require("../images/uploadImageBase64ToCloudinaryService"));
const createCompanyService = (companyData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (companyData.validationDoc) {
            const url = yield (0, uploadImageBase64ToCloudinaryService_1.default)(companyData.validationDoc);
            const resultUploadPhoto = yield (0, createImageData_1.default)({ url });
            companyData.validationDoc = resultUploadPhoto.id;
        }
        const companyCreate = yield (0, createCompanyData_1.default)(companyData);
        console.log(companyCreate);
        const companyCollaborator = {
            company: companyCreate.id,
            state: 2,
            user: companyCreate.property,
        };
        yield CollaboratorClass_1.Collaborator.create(companyCollaborator);
        return companyCreate;
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "create company");
    }
});
exports.default = createCompanyService;
