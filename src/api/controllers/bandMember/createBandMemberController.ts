import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { BandMemberInput, BandMemberOuput } from "../../models/bandMemberModel";
import createBandMemberService from "../../services/bandMember/createBandMemberService";

const createBandMemberController = async (
  req: Request<{}, {}, { band: BandMemberInput }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createBandMemberService(req.body.band);
    new ResponseApi<BandMemberOuput>({
      data: result,
      message: "band member created",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default createBandMemberController;
