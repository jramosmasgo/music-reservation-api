import { ApplicationError } from "../../core/ApplicationError";
import createImageData from "../../data/images/createImageData";
import createUserData from "../../data/users/createUserData";
import { UserOutput } from "../../models/userModel";
import uploadImageBase64ToCloudinaryService from "../images/uploadImageBase64ToCloudinaryService";
import loginUserService from "./loginUserService";

const createUserService = async (
  user: UserOutput,
  image: string
): Promise<string> => {
  try {
    if (image) {
      const url = await uploadImageBase64ToCloudinaryService(image);
      const resultUploadPhoto = await createImageData({ url });
      user.profileImage = resultUploadPhoto.id;
    }
    const resultSave = await createUserData(user);
    return await loginUserService(resultSave.email);
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default createUserService;
