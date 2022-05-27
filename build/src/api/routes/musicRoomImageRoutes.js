"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createMusicRoomImageController_1 = __importDefault(require("../controllers/music-room-images/createMusicRoomImageController"));
const deleteMusicRoomImageController_1 = __importDefault(require("../controllers/music-room-images/deleteMusicRoomImageController"));
const getAlImagesByIdMusicRoomController_1 = __importDefault(require("../controllers/music-room-images/getAlImagesByIdMusicRoomController"));
const tokenValidationMiddleware_1 = __importDefault(require("../middlewares/tokenValidationMiddleware"));
const router = (0, express_1.Router)();
router.post("/room-images", tokenValidationMiddleware_1.default, createMusicRoomImageController_1.default);
router.delete("/room-images/:idImage", tokenValidationMiddleware_1.default, deleteMusicRoomImageController_1.default);
router.get("/room-images/:idMusicRoom", getAlImagesByIdMusicRoomController_1.default);
exports.default = router;
