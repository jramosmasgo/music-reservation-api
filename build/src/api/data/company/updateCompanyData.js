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
const CompanyClass_1 = __importDefault(require("../../classes/CompanyClass"));
const ApplicationError_1 = require("../../core/ApplicationError");
const updateCompanyData = (fields, idCompany) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield CompanyClass_1.default.update(fields, {
            where: { id: idCompany },
            returning: true,
        });
        if (result[0] <= 0)
            throw new Error("Error on update company");
        const returnResult = yield CompanyClass_1.default.findOne({ where: { id: idCompany } });
        if (!returnResult)
            throw new Error("company not found");
        return returnResult;
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "company update");
    }
});
exports.default = updateCompanyData;
