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
const CollaboratorClass_1 = require("../../classes/CollaboratorClass");
const ApplicationError_1 = require("../../core/ApplicationError");
const updateCollboratorData = (collaboratorData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collaborator = yield CollaboratorClass_1.Collaborator.findOne({
            where: { id: collaboratorData.id },
        });
        if (!collaborator)
            throw new Error("Collborator not found");
        const resultUpdate = yield CollaboratorClass_1.Collaborator.update(collaboratorData, {
            where: { id: collaborator.id },
        });
        if (resultUpdate.length <= 0)
            throw new Error("Error on update collaborator");
        return collaboratorData;
    }
    catch (error) {
        throw new ApplicationError_1.ApplicationError(400, error.message, "update collborator");
    }
});
exports.default = updateCollboratorData;
