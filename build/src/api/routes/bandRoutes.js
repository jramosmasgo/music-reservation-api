"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createBandController_1 = __importDefault(require("../controllers/band/createBandController"));
const getBandByIdController_1 = __importDefault(require("../controllers/band/getBandByIdController"));
const updateBandController_1 = __importDefault(require("../controllers/band/updateBandController"));
const tokenValidationMiddleware_1 = __importDefault(require("../middlewares/tokenValidationMiddleware"));
const router = (0, express_1.Router)();
router.post("/band", tokenValidationMiddleware_1.default, createBandController_1.default);
router.post("/band", tokenValidationMiddleware_1.default, updateBandController_1.default);
router.get("/band/:idBand", tokenValidationMiddleware_1.default, getBandByIdController_1.default);
exports.default = router;
