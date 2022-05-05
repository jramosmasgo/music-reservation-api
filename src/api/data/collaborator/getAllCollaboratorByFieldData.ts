import { Collaborator } from "../../classes/CollaboratorClass";
import Company from "../../classes/CompanyClass";
import User from "../../classes/UserClass";
import { ApplicationError } from "../../core/ApplicationError";
import { CollaboratorOuput } from "../../models/collaboratorModel";

const getAllCollaboratorByfieldData = async (
  filter: Object
): Promise<CollaboratorOuput[]> => {
  try {
    console.log(filter);
    return await Collaborator.findAll({
      where: { ...filter },
      include: [{ model: User }, { model: Company }],
    });
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "list collaborators");
  }
};

export default getAllCollaboratorByfieldData;
