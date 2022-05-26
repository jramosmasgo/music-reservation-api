import { Router } from "express";
import createReservationController from "../controllers/reservation/createReservationController";
import getReservationByIdController from "../controllers/reservation/getReservationByIdController";
import getReservationsByIdMusicRoomController from "../controllers/reservation/getReservationsByIdMusicRoomController";
import getReservationsByIdUserController from "../controllers/reservation/getReservationsByIdUserContoller";
import updateReservationController from "../controllers/reservation/updateReservationController";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware";

const router = Router();

router.post(
  "/reservation",
  tokenValidationMiddleware,
  createReservationController
);

router.put(
  "/reservation/:id",
  tokenValidationMiddleware,
  updateReservationController
);

router.get(
  "/reservation/:id",
  tokenValidationMiddleware,
  getReservationByIdController
);

router.get(
  "/reservations/user",
  tokenValidationMiddleware,
  getReservationsByIdUserController
);

router.get(
  "/reservation/music-room/:idMusicRoom",
  tokenValidationMiddleware,
  getReservationsByIdMusicRoomController
);

export default router;
