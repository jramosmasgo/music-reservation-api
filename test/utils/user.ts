import { UserInput } from "../../src/api/models/userModel";
import { v4 as uuidv4 } from "uuid";

export const userMockAleatory: UserInput = {
  fullname: `Teste ${uuidv4()}`,
  email: `test${uuidv4().toString()}@gmail.com`,
  companyCreator: false,
  emailVerified: false,
  loginSocialNetwork: false,
  phone: "123456789",
  uid: "123456789",
};

export const userSeedMock: UserInput = {
  id: "5e9f8f8f-f9b8-4f7b-b8e2-f8f8f8f8f8f8",
  fullname: `Teste 01`,
  email: `test01@gmail.com`,
  companyCreator: false,
  emailVerified: false,
  loginSocialNetwork: false,
  phone: "123456789",
  uid: "123456789",
};
