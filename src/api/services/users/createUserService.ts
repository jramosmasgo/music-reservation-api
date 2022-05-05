import { ApplicationError } from "../../core/ApplicationError";
import createUserData from "../../data/users/createUserData";
import { UserOutput } from "../../models/userModel";

const createUserService = async (user: UserOutput): Promise<UserOutput> => {
  try {
    return await createUserData(user);
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default createUserService;
