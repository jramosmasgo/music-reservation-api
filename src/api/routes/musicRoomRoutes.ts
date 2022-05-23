import { Router } from "express";
import createMusicRoomController from "../controllers/music-room/createMusicRoomController";
import getAllMusicRoomsController from "../controllers/music-room/getAllMusicRoomsController";
import getMusicRoomsByIdController from "../controllers/music-room/getMusicRoomByIdController";
import getMusicRoomsByCompany from "../controllers/music-room/getMusicRoomsByCompany";
import getMusicRoomsByUserController from "../controllers/music-room/getMusicRoomsByUserController";
import updateMusicRoomController from "../controllers/music-room/updateMusicRoomController";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware";
import getMusicRoomByUserService from "../services/music-room/getMusicRoomsByUserService";

const router = Router();

router.post(
  "/music-room",
  tokenValidationMiddleware,
  createMusicRoomController
);

router.get("/music-room", getAllMusicRoomsController);

router.put("/music-room", tokenValidationMiddleware, updateMusicRoomController);

router.get(
  "/music-room/company/:idCompany",
  tokenValidationMiddleware,
  getMusicRoomsByCompany
);

router.get("/music-room/:idMusicRoom", getMusicRoomsByIdController);

router.get(
  "/music-room/user/all",
  tokenValidationMiddleware,
  getMusicRoomsByUserController
);

export default router;
