import cloudinary from "cloudinary";
import { bufferFormat } from "../../utils/bufferFormat";

export const uploadImageCloudinaryService = async (
  image: Express.Multer.File
): Promise<{ secure_url: string; public_id: string }> => {
  try {
    const { content } = bufferFormat(image);
    const { secure_url, public_id } = await cloudinary.v2.uploader.upload(
      content!
    );
    return { secure_url, public_id };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
