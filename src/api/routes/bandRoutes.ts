import { Router } from "express";
import createBandController from "../controllers/band/createBandController";
import getBandByIdController from "../controllers/band/getBandByIdController";
import updateBandController from "../controllers/band/updateBandController";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware";

const router = Router();

router.post("/band", tokenValidationMiddleware, createBandController);

router.post("/band", tokenValidationMiddleware, updateBandController);

router.get("/band/:idBand", tokenValidationMiddleware, getBandByIdController);

export default router;
