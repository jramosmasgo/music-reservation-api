import { Band } from "../../classes/BandClass";
import { ApplicationError } from "../../core/ApplicationError";
import { BandOuput } from "../../models/bandModel";

const getBandByFieldData = async (filters: Object): Promise<BandOuput> => {
  try {
    const result = await Band.findOne({ where: { ...filters } });
    if (!result) throw new Error("Band not found");
    return result;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "found band");
  }
};

export default getBandByFieldData;
