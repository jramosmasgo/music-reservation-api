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
  "/reservation",
  tokenValidationMiddleware,
  updateReservationController
);

router.get(
  "/reservation/:id",
  tokenValidationMiddleware,
  getReservationByIdController
);

router.get(
  "/reservation/user/:idUser",
  tokenValidationMiddleware,
  getReservationsByIdUserController
);

router.get(
  "/reservatio/music-room/:idmusicRoom",
  tokenValidationMiddleware,
  getReservationsByIdMusicRoomController
);

export default router;
