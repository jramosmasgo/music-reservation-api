import { Router } from "express";
import getImageByIdController from "../controllers/Image/getImageByIdController";

const router = Router();

router.get("/image/:idImage", getImageByIdController);

export default router;
