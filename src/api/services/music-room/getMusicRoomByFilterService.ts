import getMusicRoomByFilterData from "../../data/music-room/getMusicRoomByFilterData";
import { MusicRoomOuput } from "../../models/musicRoomModel";

const getMusicRoomByFilterService = async (
  filter: Object
): Promise<MusicRoomOuput> => {
  return await getMusicRoomByFilterData(filter);
};

export default getMusicRoomByFilterService;
