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
Object.defineProperty(exports, "__esModule", { value: true });
const BandClass_1 = require("../../classes/BandClass");
const ApplicationError_1 = require("../../core/ApplicationError");
const getBandByFieldData = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield BandClass_1.Band.findOne({ where: Object.assign({}, filters) });
        if (!result)
            throw new Error("Band not found");
        return result;
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "found band");
    }
});
exports.default = getBandByFieldData;
