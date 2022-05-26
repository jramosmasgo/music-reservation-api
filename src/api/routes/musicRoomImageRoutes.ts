import { Router } from "express";
import createMusicRoomImageController from "../controllers/music-room-images/createMusicRoomImageController";
import deleteMusicRoomImageController from "../controllers/music-room-images/deleteMusicRoomImageController";
import getAllImagesByIdRoomMusic from "../controllers/music-room-images/getAlImagesByIdMusicRoomController";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware";

const router = Router();

router.post(
  "/room-images",
  tokenValidationMiddleware,
  createMusicRoomImageController
);

router.delete(
  "/room-images/:idImage",
  tokenValidationMiddleware,
  deleteMusicRoomImageController
);

router.get("/room-images/:idMusicRoom", getAllImagesByIdRoomMusic);
export default router;
