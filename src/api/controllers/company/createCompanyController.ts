import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import createCompanyService from "../../services/company/createCompanyService";
import { CompanyInput } from "../../models/companyModel";

const createCompanyController = async (
  req: Request<{}, {}, CompanyInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idUser } = req.headers;
    req.body.property = idUser as string;
    const result = await createCompanyService(req.body);
    new ResponseApi<CompanyInput>({
      data: result,
      message: "company created",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default createCompanyController;
