import getMusicRoomByUserData from "../../data/music-room/getMusicRoomByUserData";
import { MusicRoomOuput } from "../../models/musicRoomModel";

const getMusicRoomByUserService = async (
  idUser: string
): Promise<MusicRoomOuput[]> => {
  return await getMusicRoomByUserData(idUser);
};

export default getMusicRoomByUserService;
