import updateBandMemberData from "../../data/bandMember/updateBandMemberData";
import { BandMemberOuput } from "../../models/bandMemberModel";

const updateBandMemberService = async (
  data: BandMemberOuput
): Promise<BandMemberOuput> => {
  return updateBandMemberData(data);
};

export default updateBandMemberService;
