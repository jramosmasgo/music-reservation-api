import getImageByFieldData from "../../data/images/getImageByFieldData";
import { ImageOuput } from "../../models/imageModel";

const getImageByIdService = async (
  idImage: string
): Promise<ImageOuput | null> => {
  return getImageByFieldData({ id: idImage });
};

export default getImageByIdService;
