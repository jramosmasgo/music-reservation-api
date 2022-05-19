import Image from "../../classes/ImageClass";
import { ApplicationError } from "../../core/ApplicationError";
import { ImageOuput } from "../../models/imageModel";

const getImageByFieldData = async (
  filter: Object
): Promise<ImageOuput | null> => {
  try {
    return Image.findOne({ where: { ...filter } });
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "find image");
  }
};

export default getImageByFieldData;
