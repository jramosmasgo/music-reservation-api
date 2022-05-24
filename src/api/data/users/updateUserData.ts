import User from "../../classes/UserClass";
import { ApplicationError } from "../../core/ApplicationError";
import { UserOutput } from "../../models/userModel";
import findUserDataByField from "./findUserDataByField";

const updateUserData = async (
  userData: Object,
  id: string
): Promise<UserOutput> => {
  try {
    const userFound = await findUserDataByField({ id });
    if (!userFound) throw new Error("User to update not found");

    const resultUpdate = await User.update(userData, {
      where: { id },
    });
    if (resultUpdate.length <= 0) throw new Error("Error updating user");

    const userFinal = await findUserDataByField({ id });

    if (!userFinal) throw new Error("");

    return userFinal;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "User update");
  }
};

export default updateUserData;
