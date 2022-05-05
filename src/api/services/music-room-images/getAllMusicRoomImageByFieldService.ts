import getAllMusicRoomsImageByFilterData from "../../data/music-room-image/getAllMusicRoomImagesByFilterData";
import { MusicRommImageOuput } from "../../models/MusicRoomImagesModel";

const getAllMusicRoomImagesByFilterService = async (
  filter: Object
): Promise<MusicRommImageOuput[]> => {
  return getAllMusicRoomsImageByFilterData(filter);
};
export default getAllMusicRoomImagesByFilterService;
