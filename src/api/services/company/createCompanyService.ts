import { Collaborator } from "../../classes/CollaboratorClass";
import { ApplicationError } from "../../core/ApplicationError";
import createCompanyData from "../../data/company/createCompanyData";
import createImageData from "../../data/images/createImageData";
import { CollaboratorInput } from "../../models/collaboratorModel";
import { CompanyInput, CompanyOuput } from "../../models/companyModel";
import uploadImageBase64ToCloudinaryService from "../images/uploadImageBase64ToCloudinaryService";

const createCompanyService = async (
  companyData: CompanyInput
): Promise<CompanyOuput> => {
  try {
    if (companyData.validationDoc) {
      const url = await uploadImageBase64ToCloudinaryService(
        companyData.validationDoc
      );
      const resultUploadPhoto = await createImageData({ url });
      companyData.validationDoc = resultUploadPhoto.id;
    }

    const companyCreate = await createCompanyData(companyData);

    console.log(companyCreate);

    const companyCollaborator: CollaboratorInput = {
      company: companyCreate.id,
      state: 2,
      user: companyCreate.property,
    };

    await Collaborator.create(companyCollaborator);

    return companyCreate;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "create company");
  }
};

export default createCompanyService;
