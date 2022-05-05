import User from "../../classes/UserClass";
import { ApplicationError } from "../../core/ApplicationError";
import { UserOutput } from "../../models/userModel";

const findUserDataByField = async (data: Object): Promise<UserOutput> => {
  try {
    const userFound = await User.findOne({ where: { ...data } });
    if (!userFound) throw new Error("User not found");
    return userFound;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Found User");
  }
};

export default findUserDataByField;
