import { Router } from "express";
import createUserController from "../controllers/user/createUserController";
import loginUserController from "../controllers/user/loginUserController";
import updateImageProfileController from "../controllers/user/updateImageProfileController";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware";
import uploadImageMiddleware from "../middlewares/uploadImageMiddleware";
const router = Router();

router.post("/sign-up", createUserController);
router.post("/sign-in", loginUserController);
router.put(
  "/update-image",
  tokenValidationMiddleware,
  uploadImageMiddleware,
  updateImageProfileController
);

export default router;
