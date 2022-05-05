import { Router } from "express";
import createMusicRoomController from "../controllers/music-room/createMusicRoomController";
import getMusicRoomsByIdController from "../controllers/music-room/getMusicRoomByIdController";
import getMusicRoomsByCountryCityController from "../controllers/music-room/getMusicRoomsByCountryCityController";
import updateMusicRoomController from "../controllers/music-room/updateMusicRoomController";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware";

const router = Router();

router.post(
  "/music-room",
  tokenValidationMiddleware,
  createMusicRoomController
);

router.purge(
  "/music-room",
  tokenValidationMiddleware,
  updateMusicRoomController
);

router.get(
  "/music-room",
  tokenValidationMiddleware,
  getMusicRoomsByCountryCityController
);

router.get(
  "/music-room/:idMusicRoom",
  tokenValidationMiddleware,
  getMusicRoomsByIdController
);

export default router;
