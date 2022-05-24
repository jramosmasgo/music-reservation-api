import { ApplicationError } from "../../core/ApplicationError";
import createImageData from "../../data/images/createImageData";
import updateUserData from "../../data/users/updateUserData";
import { UserOutput } from "../../models/userModel";
import uploadImageBase64ToCloudinaryService from "../images/uploadImageBase64ToCloudinaryService";

const updateImageProfileService = async (
  image: string,
  idUser: string
): Promise<UserOutput> => {
  try {
    const secure_url = await uploadImageBase64ToCloudinaryService(image);
    const imageData = await createImageData({ url: secure_url });
    return await updateUserData({ profileImage: imageData.id }, idUser);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Update user data");
  }
};

export default updateImageProfileService;
