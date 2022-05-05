import deleteMusicRoomImageData from "../../data/music-room-image/deleteMusicRoomImageData";

const deleteMusicRoomImageService = async (
  idImageRoomMusic: string
): Promise<Boolean> => {
  return deleteMusicRoomImageData(idImageRoomMusic);
};

export default deleteMusicRoomImageService;
