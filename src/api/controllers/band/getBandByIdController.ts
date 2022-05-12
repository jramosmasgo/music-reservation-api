import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseAPI";
import { BandOuput } from "../../models/bandModel";
import getBandByFieldService from "../../services/band/getBandByFieldService";

const getBandByIdController = async (
  req: Request<{ idBand: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getBandByFieldService({ id: req.params.idBand });
    new ResponseApi<BandOuput>({
      data: result,
      message: "Band found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getBandByIdController;
