import updateCollboratorData from "../../data/collaborator/updateCollaboratorData";
import { CollaboratorOuput } from "../../models/collaboratorModel";

const updateCollaboratorService = async (
  data: CollaboratorOuput
): Promise<CollaboratorOuput> => {
  return await updateCollboratorData(data);
};

export default updateCollaboratorService;
