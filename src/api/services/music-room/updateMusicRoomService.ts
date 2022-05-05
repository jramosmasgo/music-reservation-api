import updateMusicRoomData from "../../data/music-room/updateMusicRoomData";
import { MusicRoomOuput } from "../../models/musicRoomModel";

const updateMusicRoomService = async (
  data: MusicRoomOuput
): Promise<MusicRoomOuput> => {
  return await updateMusicRoomData(data);
};

export default updateMusicRoomService;
