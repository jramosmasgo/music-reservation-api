import Company from "../../classes/CompanyClass";
import { ApplicationError } from "../../core/ApplicationError";
import { CompanyOuput } from "../../models/companyModel";
import getCompanyByFieldData from "./getCompanyByFieldData";

const updateCompanyData = async (user: CompanyOuput): Promise<CompanyOuput> => {
  try {
    const companyFound = await getCompanyByFieldData({ id: user.id });
    if (!companyFound) throw new Error("Company not found");
    const result = await Company.update(user, { where: { id: user.id } });
    if (result.length < 0) throw new Error("Error on update company");
    return user;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "company update");
  }
};

export default updateCompanyData;
