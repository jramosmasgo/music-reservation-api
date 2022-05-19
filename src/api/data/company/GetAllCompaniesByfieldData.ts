import Company from "../../classes/CompanyClass";
import Image from "../../classes/ImageClass";
import { ApplicationError } from "../../core/ApplicationError";
import { CompanyOuput } from "../../models/companyModel";

const GetAllCompaniesByFieldData = async (
  filter: Object
): Promise<CompanyOuput[]> => {
  try {
    return await Company.findAll({
      where: { ...filter },
      include: [{ model: Image }],
    });
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "list companies");
  }
};

export default GetAllCompaniesByFieldData;
