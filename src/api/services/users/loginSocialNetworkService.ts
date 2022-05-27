import createImageData from "../../data/images/createImageData";
import createUserData from "../../data/users/createUserData";
import findUserDataByField from "../../data/users/findUserDataByField";
import { UserInput } from "../../models/userModel";
import { createAuthToken } from "../../utils/token";
import { sendEmail } from "../email/sendEmailService";
import uploadImageBase64ToCloudinaryService from "../images/uploadImageBase64ToCloudinaryService";

const loginSocialNetworkService = async (user: UserInput): Promise<string> => {
  try {
    let userFound = await findUserDataByField({ email: user.email });

    if (!userFound) {
      if (user.profileImage) {
        const url = await uploadImageBase64ToCloudinaryService(
          user.profileImage
        );
        const resultUploadPhoto = await createImageData({ url });
        user.profileImage = resultUploadPhoto.id;
      }
      userFound = await createUserData(user);

      if (userFound) {
        await sendEmail(userFound.email, "Registro de cuenta", "register.hbs", {
          username: userFound.fullname,
          url: `${process.env.URL_FRONTEND}/music-rooms`,
        });
      }
    }
    const token = createAuthToken({ idUser: userFound.id });
    return token;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default loginSocialNetworkService;
