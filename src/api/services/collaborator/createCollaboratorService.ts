import createCollaboratorData from "../../data/collaborator/createCollaboratorData";
import {
  CollaboratorInput,
  CollaboratorOuput,
} from "../../models/collaboratorModel";

const createCollaboratorService = async (
  data: CollaboratorInput
): Promise<CollaboratorOuput> => {
  return await createCollaboratorData(data);
};

export default createCollaboratorService;
