import findUserDataByField from "../../data/users/findUserDataByField";
import { UserOutput } from "../../models/userModel";

const getUserByEmailService = async (
  email: string
): Promise<UserOutput | null> => {
  return await findUserDataByField({ email });
};

export default getUserByEmailService;
