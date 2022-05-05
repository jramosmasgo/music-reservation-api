import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { CollaboratorOuput } from "../../models/collaboratorModel";
import updateCollaboratorService from "../../services/collaborator/updateCollaboratorService";

const updateCollaboratorController = async (
  req: Request<{}, {}, CollaboratorOuput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await updateCollaboratorService(req.body);
    new ResponseApi<CollaboratorOuput>({
      data: result,
      message: "collaborator updated",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default updateCollaboratorController;
