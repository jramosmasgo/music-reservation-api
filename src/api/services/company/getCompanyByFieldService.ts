import getCompanyByFieldData from "../../data/company/getCompanyByFieldData";
import { CompanyOuput } from "../../models/companyModel";

const getCompanyByFieldService = async (
  filter: Object
): Promise<CompanyOuput> => {
  return await getCompanyByFieldData(filter);
};

export default getCompanyByFieldService;
