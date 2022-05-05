import { MusicRoom } from "../../classes/MusicRoomClass";
import { ApplicationError } from "../../core/ApplicationError";
import { MusicRoomOuput } from "../../models/musicRoomModel";

const getMusicRoomsByFilterData = async (
  filter: Object
): Promise<MusicRoomOuput[]> => {
  try {
    return MusicRoom.findAll({ where: { ...filter } });
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "get music rooms");
  }
};

export default getMusicRoomsByFilterData;
