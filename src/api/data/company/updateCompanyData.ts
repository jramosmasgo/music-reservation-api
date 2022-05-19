import Company from "../../classes/CompanyClass";
import { ApplicationError } from "../../core/ApplicationError";
import { CompanyOuput } from "../../models/companyModel";

const updateCompanyData = async (
  fields: Object,
  idCompany: string
): Promise<CompanyOuput> => {
  try {
    const result = await Company.update(fields, {
      where: { id: idCompany },
      returning: true,
    });

    if (result[0] <= 0) throw new Error("Error on update company");

    const returnResult = await Company.findOne({ where: { id: idCompany } });

    if (!returnResult) throw new Error("company not found");

    return returnResult;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "company update");
  }
};

export default updateCompanyData;
