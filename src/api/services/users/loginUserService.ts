import findUserDataByField from "../../data/users/findUserDataByField";
import { createAuthToken } from "../../utils/token";

const loginUserService = async (email: string): Promise<string> => {
  const userFound = await findUserDataByField({ email });
  const token = createAuthToken({ idUser: userFound.id });
  return token;
};

export default loginUserService;
