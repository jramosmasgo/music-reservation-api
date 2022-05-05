import User from "../../classes/UserClass";
import { ApplicationError } from "../../core/ApplicationError";
import { UserOutput } from "../../models/userModel";
import findUserDataByField from "./findUserDataByField";

const updateUserData = async (userData: UserOutput): Promise<UserOutput> => {
  try {
    const userFound = await findUserDataByField({ id: userData.id });
    if (!userFound) throw new Error("User to update not found");

    const resultUpdate = await User.update(userData, {
      where: { id: userData.id },
    });
    if (resultUpdate.length <= 0) throw new Error("Error updating user");

    return userData;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "User update");
  }
};

export default updateUserData;
