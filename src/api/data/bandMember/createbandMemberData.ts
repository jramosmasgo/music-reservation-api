import { BandMember } from "../../classes/BandMember";
import { ApplicationError } from "../../core/ApplicationError";
import { BandMemberInput, BandMemberOuput } from "../../models/bandMemberModel";

const createBandMemberData = async (
  BandMemberData: BandMemberInput
): Promise<BandMemberOuput> => {
  try {
    return await BandMember.create(BandMemberData);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "create band member");
  }
};

export default createBandMemberData;
