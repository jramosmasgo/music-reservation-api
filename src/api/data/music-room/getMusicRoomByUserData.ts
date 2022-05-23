import sequelizeConnection from "../../../config/database";
import Company from "../../classes/CompanyClass";
import { MusicRoom } from "../../classes/MusicRoomClass";
import { ApplicationError } from "../../core/ApplicationError";
import { MusicRoomOuput } from "../../models/musicRoomModel";

const getMusicRoomByUserData = async (
  idUser: string
): Promise<MusicRoomOuput[]> => {
  try {
    const query = `SELECT mr.* FROM Companies c inner join MusicRooms mr on c.id = mr.company inner join Users u on c.property = u.id where u.id = "${idUser}"`;
    return await sequelizeConnection.query(query, {
      model: MusicRoom,
      mapToModel: true,
    });
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "get music rooms");
  }
};

export default getMusicRoomByUserData;
