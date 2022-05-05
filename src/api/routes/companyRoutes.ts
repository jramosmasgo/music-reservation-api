import { Router } from "express";
import getCompaniesByUserController from "../controllers/company/getCompaniesByUserController";
import createCompanyController from "../controllers/company/createCompanyController";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware";
import updateCompanyController from "../controllers/company/updateCompanyController";
import getCompanyByIdController from "../controllers/company/getCompanyByIdController";

const router = Router();

router.get("/company", tokenValidationMiddleware, getCompaniesByUserController);
router.get("/company/:id", tokenValidationMiddleware, getCompanyByIdController);
router.post("/company", tokenValidationMiddleware, createCompanyController);
router.put("/company", tokenValidationMiddleware, updateCompanyController);

export default router;
