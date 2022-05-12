import { ApplicationError } from "../../core/ApplicationError";
import createImageData from "../../data/images/createImageData";
import findUserDataByField from "../../data/users/findUserDataByField";
import updateUserData from "../../data/users/updateUserData";
import { UserOutput } from "../../models/userModel";
import uploadImageBase64ToCloudinaryService from "../images/uploadImageBase64ToCloudinaryService";

const updateImageProfileService = async (
  image: string,
  idUser: string
): Promise<UserOutput> => {
  try {
    const userFound = await findUserDataByField({ id: idUser });
    if (!userFound) throw new Error("User not found");

    const secure_url = await uploadImageBase64ToCloudinaryService(image);
    const imageData = await createImageData({ url: secure_url });

    userFound.profileImage = imageData.id;
    const result = await updateUserData(userFound);
    return result;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Update user data");
  }
};

export default updateImageProfileService;
