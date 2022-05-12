import getBandByFieldData from "../../data/band/getBandByFieldData";
import { BandOuput } from "../../models/bandModel";

const getBandByFieldService = async (filter: Object): Promise<BandOuput> => {
  return getBandByFieldData(filter);
};

export default getBandByFieldService;
