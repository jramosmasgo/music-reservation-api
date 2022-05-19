import updateCompanyData from "../../data/company/updateCompanyData";
import { CompanyOuput } from "../../models/companyModel";

const updateCompanyService = async (
  values: Object,
  id: string
): Promise<CompanyOuput> => {
  return await updateCompanyData({ ...values }, id);
};

export default updateCompanyService;
