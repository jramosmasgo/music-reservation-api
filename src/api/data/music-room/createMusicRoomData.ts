import { MusicRoom } from "../../classes/MusicRoomClass";
import { ApplicationError } from "../../core/ApplicationError";
import { MusicRoomInput, MusicRoomOuput } from "../../models/musicRoomModel";

const createMusicRoomData = async (
  data: MusicRoomInput
): Promise<MusicRoomOuput> => {
  try {
    return await MusicRoom.create(data);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "create music room");
  }
};

export default createMusicRoomData;
