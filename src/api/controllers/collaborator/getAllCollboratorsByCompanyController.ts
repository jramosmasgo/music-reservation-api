import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { CollaboratorOuput } from "../../models/collaboratorModel";
import getAllCollaboratorByFieldService from "../../services/collaborator/getAllCollboratorByFieldService";

const getAlleCollaboratorsByCompanyController = async (
  req: Request<{ companyId: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getAllCollaboratorByFieldService({
      company: req.params.companyId,
    });
    new ResponseApi<CollaboratorOuput[]>({
      data: result,
      message: "collaborators founds",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getAlleCollaboratorsByCompanyController;
