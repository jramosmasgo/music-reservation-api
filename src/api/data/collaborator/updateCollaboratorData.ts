import { Collaborator } from "../../classes/CollaboratorClass";
import { ApplicationError } from "../../core/ApplicationError";
import { CollaboratorOuput } from "../../models/collaboratorModel";

const updateCollboratorData = async (
  collaboratorData: CollaboratorOuput
): Promise<CollaboratorOuput> => {
  try {
    const collaborator = await Collaborator.findOne({
      where: { id: collaboratorData.id },
    });

    if (!collaborator) throw new Error("Collborator not found");

    const resultUpdate = await Collaborator.update(collaboratorData, {
      where: { id: collaborator.id },
    });

    if (resultUpdate.length <= 0)
      throw new Error("Error on update collaborator");

    return collaboratorData;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "update collborator");
  }
};

export default updateCollboratorData;
