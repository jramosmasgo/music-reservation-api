import { MusicRoomImage } from "../../classes/MusicRoomImagesClass";
import { ApplicationError } from "../../core/ApplicationError";
import {
  MusicRommImageInput,
  MusicRommImageOuput,
} from "../../models/MusicRoomImagesModel";

const createMusicRoomImageData = async (
  data: MusicRommImageInput
): Promise<MusicRommImageOuput> => {
  try {
    return await MusicRoomImage.create(data);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "create Music Room");
  }
};

export default createMusicRoomImageData;
