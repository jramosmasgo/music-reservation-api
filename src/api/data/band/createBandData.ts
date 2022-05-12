import { Band } from "../../classes/BandClass";
import { ApplicationError } from "../../core/ApplicationError";
import { BandInput, BandOuput } from "../../models/bandModel";

const createBandData = async (band: BandInput): Promise<BandOuput> => {
  try {
    return await Band.create(band);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "create band");
  }
};

export default createBandData;
