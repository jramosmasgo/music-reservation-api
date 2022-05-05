import Company from "../../classes/CompanyClass";
import { ApplicationError } from "../../core/ApplicationError";
import { CompanyInput, CompanyOuput } from "../../models/companyModel";

const createCompanyData = async (
  companyData: CompanyInput
): Promise<CompanyOuput> => {
  try {
    return await Company.create(companyData);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "create company");
  }
};

export default createCompanyData;
