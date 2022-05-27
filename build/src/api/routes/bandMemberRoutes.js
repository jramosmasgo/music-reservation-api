"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createBandMemberController_1 = __importDefault(require("../controllers/bandMember/createBandMemberController"));
const getBandMembersByBandIdController_1 = __importDefault(require("../controllers/bandMember/getBandMembersByBandIdController"));
const updateBandMemberController_1 = __importDefault(require("../controllers/bandMember/updateBandMemberController"));
const tokenValidationMiddleware_1 = __importDefault(require("../middlewares/tokenValidationMiddleware"));
const router = (0, express_1.Router)();
router.post("/band-member", tokenValidationMiddleware_1.default, createBandMemberController_1.default);
router.put("/band-member", tokenValidationMiddleware_1.default, updateBandMemberController_1.default);
router.get("/band-member/:idBand", tokenValidationMiddleware_1.default, getBandMembersByBandIdController_1.default);
exports.default = router;
