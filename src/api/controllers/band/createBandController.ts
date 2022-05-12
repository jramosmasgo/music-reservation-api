import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { BandInput, BandOuput } from "../../models/bandModel";
import createBandService from "../../services/band/createBandService";

const createBandController = async (
  req: Request<{}, {}, { band: BandInput; logo: string; coverImage: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createBandService(
      req.body.band,
      req.body.logo,
      req.body.coverImage
    );
    new ResponseApi<BandOuput>({
      data: result,
      message: "band created",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default createBandController;
