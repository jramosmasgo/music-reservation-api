"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const token_1 = require("../../../src/api/utils/token");
const app_1 = __importDefault(require("../../../src/app"));
const database_1 = __importDefault(require("../../../src/config/database"));
const relations_1 = require("../../../src/config/relations");
const user_1 = require("../../utils/user");
describe("User Routes", () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        (0, relations_1.initRelations)();
    }));
    // Actiate only if you need create a new user
    it.skip("save a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/sign-up")
            .send({ user: user_1.userMockAleatory, image: null });
        expect(response.status).toBe(200);
        expect(response.body.ok).toBe(true);
    }));
    it("should return a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/sign-in")
            .send({ email: user_1.userSeedMock.email });
        expect(response.status).toBe(200);
        expect(response.body.ok).toBe(true);
    }));
    it("return a user by email", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = (0, token_1.createAuthToken)({ idUser: user_1.userSeedMock.id });
        const response = yield (0, supertest_1.default)(app_1.default)
            .get(`/user/${user_1.userSeedMock.email}`)
            .set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(200);
        expect(response.body.ok).toBe(true);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        database_1.default.close();
    }));
});
