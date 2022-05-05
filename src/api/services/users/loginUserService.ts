import { ApplicationError } from "../../core/ApplicationError";
import findUserDataByField from "../../data/users/findUserDataByField";
import { createAuthToken } from "../../utils/token";

const loginUserService = async (email: string): Promise<string> => {
  try {
    const userFound = await findUserDataByField({ email });
    if (!userFound) throw new Error("User not found");
    const token = createAuthToken({ idUser: userFound.id });
    return token;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Authentication Error");
  }
};

export default loginUserService;
