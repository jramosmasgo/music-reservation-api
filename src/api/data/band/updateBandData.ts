import { Band } from "../../classes/BandClass";
import { ApplicationError } from "../../core/ApplicationError";
import { BandOuput } from "../../models/bandModel";
import getBandByFieldData from "./getBandByFieldData";

const updateBandData = async (bandToUpdate: BandOuput): Promise<BandOuput> => {
  try {
    const band = await getBandByFieldData({ id: bandToUpdate.id });
    const result = await Band.update(bandToUpdate, { where: { id: band.id } });
    if (result.length <= 0) throw new Error("Error on update Band");
    return bandToUpdate;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "update band Data");
  }
};

export default updateBandData;
