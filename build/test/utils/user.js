"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSeedMock = exports.userMockAleatory = void 0;
const uuid_1 = require("uuid");
exports.userMockAleatory = {
    fullname: `Teste ${(0, uuid_1.v4)()}`,
    email: `test${(0, uuid_1.v4)().toString()}@gmail.com`,
    companyCreator: false,
    emailVerified: false,
    loginSocialNetwork: false,
    phone: "123456789",
    uid: "123456789",
};
exports.userSeedMock = {
    id: "5e9f8f8f-f9b8-4f7b-b8e2-f8f8f8f8f8f8",
    fullname: `Teste 01`,
    email: `test01@gmail.com`,
    companyCreator: false,
    emailVerified: false,
    loginSocialNetwork: false,
    phone: "123456789",
    uid: "123456789",
};
