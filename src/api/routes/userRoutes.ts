import { Router } from "express";
import createUserController from "../controllers/user/createUserController";
import getUserByEmailController from "../controllers/user/getUserByEmailController";
import loginSocialNetworkController from "../controllers/user/loginSocialNetworkController";
import loginUserController from "../controllers/user/loginUserController";
import updateImageProfileController from "../controllers/user/updateImageProfileController";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware";
const router = Router();

router.post("/sign-up", createUserController);
router.post("/sign-up/social-network", loginSocialNetworkController);
router.post("/sign-in", loginUserController);
router.get("/user/:email", tokenValidationMiddleware, getUserByEmailController);

router.put(
  "/update-image",
  tokenValidationMiddleware,
  updateImageProfileController
);

export default router;
