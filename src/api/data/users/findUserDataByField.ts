import Image from "../../classes/ImageClass";
import User from "../../classes/UserClass";
import { ApplicationError } from "../../core/ApplicationError";
import { UserOutput } from "../../models/userModel";

const findUserDataByField = async (
  data: Object
): Promise<UserOutput | null> => {
  try {
    console.log(data);
    return await User.findOne({
      where: { ...data },
      include: [{ model: Image }],
    });
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Found User");
  }
};

export default findUserDataByField;
