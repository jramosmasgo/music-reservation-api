import { Router } from "express";
import createBandMemberController from "../controllers/bandMember/createBandMemberController";
import getBandMembersByBandIdController from "../controllers/bandMember/getBandMembersByBandIdController";
import updateBandMemberController from "../controllers/bandMember/updateBandMemberController";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware";

const router = Router();

router.post(
  "/band-member",
  tokenValidationMiddleware,
  createBandMemberController
);

router.put(
  "/band-member",
  tokenValidationMiddleware,
  updateBandMemberController
);

router.get(
  "/band-member/:idBand",
  tokenValidationMiddleware,
  getBandMembersByBandIdController
);

export default router;
