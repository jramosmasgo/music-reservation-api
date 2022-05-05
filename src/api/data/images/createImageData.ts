import Image from "../../classes/ImageClass";
import { ImageInput, ImageOuput } from "../../models/imageModel";

const createImageData = async (dataImage: ImageInput): Promise<ImageOuput> => {
  try {
    return await Image.create(dataImage);
  } catch (error) {
    throw new Error("");
  }
};

export default createImageData;
