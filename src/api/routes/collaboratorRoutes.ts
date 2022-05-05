import { Router } from "express";
import createCollaboratorController from "../controllers/collaborator/createCollaboratorController";
import getAlleCollaboratorsByCompanyController from "../controllers/collaborator/getAllCollboratorsByCompanyController";
import updateCollaboratorController from "../controllers/collaborator/updateCollboratorController";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware";

const router = Router();

router.post(
  "/collaborator",
  tokenValidationMiddleware,
  createCollaboratorController
);

router.put(
  "/collaborator",
  tokenValidationMiddleware,
  updateCollaboratorController
);

router.get(
  "/collaborator/:companyId",
  tokenValidationMiddleware,
  getAlleCollaboratorsByCompanyController
);

export default router;
