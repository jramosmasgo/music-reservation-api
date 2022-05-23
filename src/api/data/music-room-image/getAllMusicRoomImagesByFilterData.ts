import Image from "../../classes/ImageClass";
import { MusicRommImage } from "../../classes/MusicRoomImagesClass";
import { ApplicationError } from "../../core/ApplicationError";
import { MusicRommImageOuput } from "../../models/MusicRoomImagesModel";

const getAllMusicRoomsImageByFilter = async (
  filter: Object
): Promise<MusicRommImageOuput[]> => {
  try {
    return await MusicRommImage.findAll({
      where: { ...filter },
      include: [{ model: Image }],
    });
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "serch music Room Images");
  }
};

export default getAllMusicRoomsImageByFilter;
