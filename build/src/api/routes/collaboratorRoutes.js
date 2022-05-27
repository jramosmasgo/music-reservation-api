"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createCollaboratorController_1 = __importDefault(require("../controllers/collaborator/createCollaboratorController"));
const getAllCollboratorsByCompanyController_1 = __importDefault(require("../controllers/collaborator/getAllCollboratorsByCompanyController"));
const updateCollboratorController_1 = __importDefault(require("../controllers/collaborator/updateCollboratorController"));
const tokenValidationMiddleware_1 = __importDefault(require("../middlewares/tokenValidationMiddleware"));
const router = (0, express_1.Router)();
router.post("/collaborator", tokenValidationMiddleware_1.default, createCollaboratorController_1.default);
router.put("/collaborator", tokenValidationMiddleware_1.default, updateCollboratorController_1.default);
router.get("/collaborator/:companyId", tokenValidationMiddleware_1.default, getAllCollboratorsByCompanyController_1.default);
exports.default = router;
