import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { CompanyOuput } from "../../models/companyModel";
import uploadLogoCompanyService from "../../services/company/uploadLogoCompanyService";

const uploadLogoCompanyController = async (
  req: Request<{ idCompany: string }, {}, { image: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await uploadLogoCompanyService(
      req.body.image,
      req.params.idCompany
    );
    new ResponseApi<CompanyOuput>({
      data: result,
      message: "company updated",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default uploadLogoCompanyController;
