import Company from "../../classes/CompanyClass";
import { MusicRoom } from "../../classes/MusicRoomClass";
import { ApplicationError } from "../../core/ApplicationError";
import { MusicRoomOuput } from "../../models/musicRoomModel";

const getMusicRoomByFilterData = async (
  filter: Object
): Promise<MusicRoomOuput> => {
  try {
    const musicRoom = await MusicRoom.findOne({
      where: { ...filter },
      include: [{ model: Company }],
    });
    if (!musicRoom) throw new Error("music room not found");
    return musicRoom;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "get music rooms");
  }
};

export default getMusicRoomByFilterData;
