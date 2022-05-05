import GetAllCompaniesByFieldData from "../../data/company/GetAllCompaniesByfieldData";
import { CompanyOuput } from "../../models/companyModel";

const GetAllCompaniesByFieldService = async (
  filter: Object
): Promise<CompanyOuput[]> => {
  return await GetAllCompaniesByFieldData(filter);
};

export default GetAllCompaniesByFieldService;
