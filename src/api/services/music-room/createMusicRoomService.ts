import createMusicRoomData from "../../data/music-room/createMusicRoomData";
import { MusicRoomInput, MusicRoomOuput } from "../../models/musicRoomModel";

const createMusicRoomService = async (
  data: MusicRoomInput
): Promise<MusicRoomOuput> => {
  return await createMusicRoomData(data);
};

export default createMusicRoomService;
