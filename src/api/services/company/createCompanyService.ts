import createCompanyData from "../../data/company/createCompanyData";
import { CompanyInput, CompanyOuput } from "../../models/companyModel";

const createCompanyService = async (
  companyData: CompanyInput
): Promise<CompanyOuput> => {
  return await createCompanyData(companyData);
};

export default createCompanyService;
