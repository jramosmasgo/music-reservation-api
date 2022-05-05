import { ApplicationError } from "../../core/ApplicationError";
import createImageData from "../../data/images/createImageData";
import findUserDataByField from "../../data/users/findUserDataByField";
import updateUserData from "../../data/users/updateUserData";
import { UserOutput } from "../../models/userModel";
import { uploadImageCloudinaryService } from "../images/uploadImageToCloudinaryService";

const updateImageProfileService = async (
  image: Express.Multer.File,
  idUser: string
): Promise<UserOutput> => {
  try {
    const userFound = await findUserDataByField({ id: idUser });
    if (!userFound) throw new Error("User not found");

    const { secure_url } = await uploadImageCloudinaryService(image);
    const imageData = await createImageData({ url: secure_url });

    userFound.profileImage = imageData.id;
    const result = await updateUserData(userFound);
    return result;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Update data");
  }
};

export default updateImageProfileService;
