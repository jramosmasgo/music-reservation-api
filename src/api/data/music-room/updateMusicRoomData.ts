import { MusicRoom } from "../../classes/MusicRoomClass";
import { ApplicationError } from "../../core/ApplicationError";
import { MusicRoomOuput } from "../../models/musicRoomModel";
import getMusicRoomByFilterData from "./getMusicRoomByFilterData";

const updateMusicRoomData = async (
  data: MusicRoomOuput
): Promise<MusicRoomOuput> => {
  try {
    const musicroom = await getMusicRoomByFilterData({ id: data.id });
    if (!musicroom) throw new Error("music room not found");
    const resultUpdate = await MusicRoom.update(data, {
      where: { id: musicroom.id },
    });
    if (resultUpdate.length <= 0) throw new Error("error on update musci room");
    return data;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "udate music room");
  }
};

export default updateMusicRoomData;
