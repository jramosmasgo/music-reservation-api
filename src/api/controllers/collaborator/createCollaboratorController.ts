import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import {
  CollaboratorInput,
  CollaboratorOuput,
} from "../../models/collaboratorModel";
import createCollaboratorService from "../../services/collaborator/createCollaboratorService";

const createCollaboratorController = async (
  req: Request<{}, {}, CollaboratorInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createCollaboratorService(req.body);
    new ResponseApi<CollaboratorOuput>({
      data: result,
      message: "collaborator created",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default createCollaboratorController;
