import { Router } from "express";
import createMusicRoomController from "../controllers/music-room/createMusicRoomController";
import getAllMusicRoomsController from "../controllers/music-room/getAllMusicRoomsController";
import getMusicRoomsByIdController from "../controllers/music-room/getMusicRoomByIdController";
import getMusicRoomsByCompany from "../controllers/music-room/getMusicRoomsByCompany";
import updateMusicRoomController from "../controllers/music-room/updateMusicRoomController";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware";

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

export default router;
