import User from "../../classes/UserClass";
import { ApplicationError } from "../../core/ApplicationError";
import { UserInput, UserOutput } from "../../models/userModel";

export const createUserData = async (
  userData: UserInput
): Promise<UserOutput> => {
  try {
    return await User.create(userData);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Creation User");
  }
};

export default createUserData;
