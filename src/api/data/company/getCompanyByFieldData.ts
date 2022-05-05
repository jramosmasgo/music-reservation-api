import Company from "../../classes/CompanyClass";
import { ApplicationError } from "../../core/ApplicationError";
import { CompanyOuput } from "../../models/companyModel";

const getCompanyByFieldData = async (filter: Object): Promise<CompanyOuput> => {
  try {
    const companyFound = await Company.findOne({ where: { ...filter } });
    if (!companyFound) throw new Error("company not found");
    return companyFound;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "find company");
  }
};

export default getCompanyByFieldData;
