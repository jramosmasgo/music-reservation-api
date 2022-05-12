import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { BandMemberOuput } from "../../models/bandMemberModel";
import getBandMemberService from "../../services/bandMember/getBandMembersService";

const getBandMembersByBandIdController = async (
  req: Request<{ idBand: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getBandMemberService({ id: req.params.idBand });
    new ResponseApi<BandMemberOuput[]>({
      data: result,
      message: "band member found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getBandMembersByBandIdController;
