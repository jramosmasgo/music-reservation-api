import getAllCollaboratorByfieldData from "../../data/collaborator/getAllCollaboratorByFieldData";
import { CollaboratorOuput } from "../../models/collaboratorModel";

const getAllCollaboratorByFieldService = async (
  filter: Object
): Promise<CollaboratorOuput[]> => {
  return await getAllCollaboratorByfieldData(filter);
};

export default getAllCollaboratorByFieldService;
