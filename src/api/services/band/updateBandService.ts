import { ApplicationError } from "../../core/ApplicationError";
import updateBandData from "../../data/band/updateBandData";
import createImageData from "../../data/images/createImageData";
import { BandOuput } from "../../models/bandModel";
import uploadImageBase64ToCloudinaryService from "../images/uploadImageBase64ToCloudinaryService";

const updateBandService = async (
  data: BandOuput,
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

    return await updateBandData(data);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "update band data");
  }
};

export default updateBandService;
