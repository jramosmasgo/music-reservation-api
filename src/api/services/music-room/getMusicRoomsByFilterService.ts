import getMusicRoomsByFilterData from "../../data/music-room/GetMusicRoomsByFilterData";
import { MusicRoomOuput } from "../../models/musicRoomModel";

const GetMusicRoomsByFilterService = async (
  filter: Object
): Promise<MusicRoomOuput[]> => {
  return await getMusicRoomsByFilterData(filter);
};

export default GetMusicRoomsByFilterService;
