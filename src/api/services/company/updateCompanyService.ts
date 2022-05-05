import updateCompanyData from "../../data/company/updateCompanyData";
import { CompanyOuput } from "../../models/companyModel";

const updateCompanyService = async (
  company: CompanyOuput
): Promise<CompanyOuput> => {
  return await updateCompanyData(company);
};

export default updateCompanyService;
