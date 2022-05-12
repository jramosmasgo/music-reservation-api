import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { BandOuput } from "../../models/bandModel";
import updateBandService from "../../services/band/updateBandService";

const updateBandController = async (
  req: Request<{}, {}, { band: BandOuput; logo: string; coverImage: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await updateBandService(
      req.body.band,
      req.body.logo,
      req.body.coverImage
    );
    new ResponseApi<BandOuput>({
      data: result,
      message: "Band updated",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default updateBandController;
