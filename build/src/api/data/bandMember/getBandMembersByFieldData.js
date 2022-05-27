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
const BandMember_1 = require("../../classes/BandMember");
const ApplicationError_1 = require("../../core/ApplicationError");
const getBandMembersByFieldData = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield BandMember_1.BandMember.findAll({ where: Object.assign({}, filter) });
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "find band members");
    }
});
exports.default = getBandMembersByFieldData;
