import { ApplicationError } from "../../core/ApplicationError";
import getCompanyByFieldData from "../../data/company/getCompanyByFieldData";
import updateCompanyData from "../../data/company/updateCompanyData";
import createImageData from "../../data/images/createImageData";
import { CompanyOuput } from "../../models/companyModel";
import { ImageInput } from "../../models/imageModel";
import uploadImageBase64ToCloudinaryService from "../images/uploadImageBase64ToCloudinaryService";

const uploadLogoCompanyService = async (
  image: string,
  idCompany: string
): Promise<CompanyOuput> => {
  try {
    const companyFound = await getCompanyByFieldData({ id: idCompany });
    const urlUploadLogo = await uploadImageBase64ToCloudinaryService(image);
    const imageToCreate: ImageInput = {
      url: urlUploadLogo,
    };

    const resultCreateImageData = await createImageData(imageToCreate);

    return updateCompanyData(
      { logo: resultCreateImageData.id },
      companyFound.id
    );
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "upload logo company");
  }
};

export default uploadLogoCompanyService;
