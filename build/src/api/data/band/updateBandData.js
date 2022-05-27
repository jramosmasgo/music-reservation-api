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
const BandClass_1 = require("../../classes/BandClass");
const ApplicationError_1 = require("../../core/ApplicationError");
const getBandByFieldData_1 = __importDefault(require("./getBandByFieldData"));
const updateBandData = (bandToUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const band = yield (0, getBandByFieldData_1.default)({ id: bandToUpdate.id });
        const result = yield BandClass_1.Band.update(bandToUpdate, { where: { id: band.id } });
        if (result.length <= 0)
            throw new Error("Error on update Band");
        return bandToUpdate;
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "update band Data");
    }
});
exports.default = updateBandData;
