import cloudinary from "cloudinary";
import { ApplicationError } from "../../core/ApplicationError";

const uploadImageBase64ToCloudinaryService = async (
  imageBase64: string
): Promise<string> => {
  try {
    const { secure_url } = await cloudinary.v2.uploader.upload(imageBase64);
    return secure_url;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "upload image");
  }
};

export default uploadImageBase64ToCloudinaryService;
