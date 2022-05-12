import getBandMembersByFieldData from "../../data/bandMember/getBandMembersByFieldData";
import { BandMemberOuput } from "../../models/bandMemberModel";

const getBandMemberService = async (
  filter: Object
): Promise<BandMemberOuput[]> => {
  return await getBandMembersByFieldData(filter);
};

export default getBandMemberService;
