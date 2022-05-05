import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { CompanyOuput } from "../../models/companyModel";
import getCompanyByFieldService from "../../services/company/getCompanyByFieldService";

const getCompanyByIdController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getCompanyByFieldService({ id: req.params.id });
    new ResponseApi<CompanyOuput>({
      data: result,
      message: "company found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getCompanyByIdController;
