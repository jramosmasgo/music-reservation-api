"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getCompaniesByUserController_1 = __importDefault(require("../controllers/company/getCompaniesByUserController"));
const createCompanyController_1 = __importDefault(require("../controllers/company/createCompanyController"));
const tokenValidationMiddleware_1 = __importDefault(require("../middlewares/tokenValidationMiddleware"));
const updateCompanyController_1 = __importDefault(require("../controllers/company/updateCompanyController"));
const getCompanyByIdController_1 = __importDefault(require("../controllers/company/getCompanyByIdController"));
const uploadLogoCompanyController_1 = __importDefault(require("../controllers/company/uploadLogoCompanyController"));
const router = (0, express_1.Router)();
router.get("/company", tokenValidationMiddleware_1.default, getCompaniesByUserController_1.default);
router.get("/company/:id", tokenValidationMiddleware_1.default, getCompanyByIdController_1.default);
router.post("/company", tokenValidationMiddleware_1.default, createCompanyController_1.default);
router.put("/company/:idCompanu", tokenValidationMiddleware_1.default, updateCompanyController_1.default);
router.put("/company/logo/:idCompany", tokenValidationMiddleware_1.default, uploadLogoCompanyController_1.default);
exports.default = router;
