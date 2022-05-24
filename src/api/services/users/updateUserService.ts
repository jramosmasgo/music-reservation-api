import { ApplicationError } from "../../core/ApplicationError";
import updateUserData from "../../data/users/updateUserData";
import { UserOutput } from "../../models/userModel";

const updateUserService = async (
  fields: Object,
  idUser: string
): Promise<UserOutput> => {
  try {
    return await updateUserData(fields, idUser);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Update user data");
  }
};

export default updateUserService;
