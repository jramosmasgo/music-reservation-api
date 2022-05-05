import { MusicRommImage } from "../../classes/MusicRoomImagesClass";
import { ApplicationError } from "../../core/ApplicationError";

const deleteMusicRoomImageData = async (id: string): Promise<boolean> => {
  try {
    const result = await MusicRommImage.destroy({ where: { id: id } });
    if (result <= 0) throw new Error("Error on remove Music Romm Image");
    return true;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "create Music Room");
  }
};

export default deleteMusicRoomImageData;
