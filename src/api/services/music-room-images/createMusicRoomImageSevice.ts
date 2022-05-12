import { ApplicationError } from "../../core/ApplicationError";
import createImageData from "../../data/images/createImageData";
import createMusicRoomImageData from "../../data/music-room-image/createMusicRoomImageData";
import getMusicRoomByFilterData from "../../data/music-room/getMusicRoomByFilterData";
import { MusicRommImageInput } from "../../models/MusicRoomImagesModel";
import uploadImageBase64ToCloudinaryService from "../images/uploadImageBase64ToCloudinaryService";

const createMusicRoomImageService = async (
  image: string,
  idMusicRoom: string
) => {
  try {
    const musicroom = await getMusicRoomByFilterData({ id: idMusicRoom });
    if (!musicroom) throw new Error("music room not found");

    const secure_url = await uploadImageBase64ToCloudinaryService(image);
    const imageData = await createImageData({ url: secure_url });

    if (!imageData) throw new Error("error on save image");
    const dataMusicRoomImage: MusicRommImageInput = {
      idMusicRoom: musicroom.id,
      idImage: imageData.id,
    };

    return await createMusicRoomImageData(dataMusicRoomImage);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "create room image");
  }
};

export default createMusicRoomImageService;
