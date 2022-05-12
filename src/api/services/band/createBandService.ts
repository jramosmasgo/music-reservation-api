import { ApplicationError } from "../../core/ApplicationError";
import createBandData from "../../data/band/createBandData";
import createImageData from "../../data/images/createImageData";
import { BandInput, BandOuput } from "../../models/bandModel";
import uploadImageBase64ToCloudinaryService from "../images/uploadImageBase64ToCloudinaryService";

const createBandService = async (
  data: BandInput,
  logo: string,
  coverImage: string
): Promise<BandOuput> => {
  try {
    if (logo) {
      const url = await uploadImageBase64ToCloudinaryService(logo);
      const { id } = await createImageData({ url });
      data.logo = id;
    }

    if (coverImage) {
      const url = await uploadImageBase64ToCloudinaryService(coverImage);
      const { id } = await createImageData({ url });
      data.coverImage = id;
    }

    return await createBandData(data);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "create band data");
  }
};

export default createBandService;
