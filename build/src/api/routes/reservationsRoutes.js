"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createReservationController_1 = __importDefault(require("../controllers/reservation/createReservationController"));
const getReservationByIdController_1 = __importDefault(require("../controllers/reservation/getReservationByIdController"));
const getReservationsByIdMusicRoomController_1 = __importDefault(require("../controllers/reservation/getReservationsByIdMusicRoomController"));
const getReservationsByIdUserContoller_1 = __importDefault(require("../controllers/reservation/getReservationsByIdUserContoller"));
const updateReservationController_1 = __importDefault(require("../controllers/reservation/updateReservationController"));
const tokenValidationMiddleware_1 = __importDefault(require("../middlewares/tokenValidationMiddleware"));
const router = (0, express_1.Router)();
router.post("/reservation", tokenValidationMiddleware_1.default, createReservationController_1.default);
router.put("/reservation/:id", tokenValidationMiddleware_1.default, updateReservationController_1.default);
router.get("/reservation/:id", tokenValidationMiddleware_1.default, getReservationByIdController_1.default);
router.get("/reservations/user", tokenValidationMiddleware_1.default, getReservationsByIdUserContoller_1.default);
router.get("/reservation/music-room/:idMusicRoom", tokenValidationMiddleware_1.default, getReservationsByIdMusicRoomController_1.default);
exports.default = router;
