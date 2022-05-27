"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getImageByIdController_1 = __importDefault(require("../controllers/Image/getImageByIdController"));
const router = (0, express_1.Router)();
router.get("/image/:idImage", getImageByIdController_1.default);
exports.default = router;
