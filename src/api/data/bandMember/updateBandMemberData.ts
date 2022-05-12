import { BandMember } from "../../classes/BandMember";
import { ApplicationError } from "../../core/ApplicationError";
import { BandMemberOuput } from "../../models/bandMemberModel";

const updateBandMemberData = async (
  updateBandMember: BandMemberOuput
): Promise<BandMemberOuput> => {
  try {
    const bandMember = await BandMember.findOne({
      where: { id: updateBandMember.id },
    });

    if (!bandMember) throw new Error("band memebernot found");

    const resultupdate = await BandMember.update(updateBandMember, {
      where: { id: bandMember.id },
    });

    if (resultupdate.length <= 0)
      throw new Error("error on update band member");

    return updateBandMember;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "update band member");
  }
};

export default updateBandMemberData;
