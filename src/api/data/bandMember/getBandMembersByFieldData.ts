import { BandMember } from "../../classes/BandMember";
import { ApplicationError } from "../../core/ApplicationError";
import { BandMemberOuput } from "../../models/bandMemberModel";

const getBandMembersByFieldData = async (
  filter: Object
): Promise<BandMemberOuput[]> => {
  try {
    return await BandMember.findAll({ where: { ...filter } });
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "find band members");
  }
};

export default getBandMembersByFieldData;
