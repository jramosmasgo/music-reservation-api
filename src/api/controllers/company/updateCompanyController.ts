import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { CompanyOuput } from "../../models/companyModel";
import updateCompanyService from "../../services/company/updateCompanyService";

const updateCompanyController = async (
  req: Request<{}, {}, CompanyOuput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await updateCompanyService(req.body);
    new ResponseApi<CompanyOuput>({
      data: result,
      message: "company updated",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default updateCompanyController;
