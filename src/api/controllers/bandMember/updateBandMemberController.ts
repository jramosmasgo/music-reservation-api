import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { BandMemberOuput } from "../../models/bandMemberModel";
import updateBandMemberService from "../../services/bandMember/updateBandMemberService";

const updateBandMemberController = async (
  req: Request<{}, {}, { band: BandMemberOuput }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await updateBandMemberService(req.body.band);
    new ResponseApi<BandMemberOuput>({
      data: result,
      message: "band member updated",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default updateBandMemberController;
