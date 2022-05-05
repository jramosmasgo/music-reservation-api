import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { CompanyOuput } from "../../models/companyModel";
import GetAllCompaniesByFieldService from "../../services/company/getAllCompaniesByfieldService";

const getCompaniesByUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idUser } = req.headers;
    const result = await GetAllCompaniesByFieldService({
      property: idUser as string,
    });
    new ResponseApi<CompanyOuput[]>({
      data: result,
      message: "companies found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getCompaniesByUserController;
