import { Collaborator } from "../../classes/CollaboratorClass";
import { ApplicationError } from "../../core/ApplicationError";
import {
  CollaboratorInput,
  CollaboratorOuput,
} from "../../models/collaboratorModel";

const createCollaboratorData = async (
  collaboratorData: CollaboratorInput
): Promise<CollaboratorOuput> => {
  try {
    return await Collaborator.create(collaboratorData);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "create collaborator");
  }
};

export default createCollaboratorData;
