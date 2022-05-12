import createBandMemberData from "../../data/bandMember/createbandMemberData";
import { BandMemberInput, BandMemberOuput } from "../../models/bandMemberModel";

const createBandMemberService = async (
  data: BandMemberInput
): Promise<BandMemberOuput> => {
  return await createBandMemberData(data);
};

export default createBandMemberService;
