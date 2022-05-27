import supertest from "supertest";
import { createAuthToken } from "../../../src/api/utils/token";
import app from "../../../src/app";
import sequelizeConnection from "../../../src/config/database";
import { initRelations } from "../../../src/config/relations";
import { userMockAleatory, userSeedMock } from "../../utils/user";

describe("User Routes", () => {
  beforeEach(async () => {
    initRelations();
  });

  // Actiate only if you need create a new user
  it.skip("save a user", async () => {
    const response = await supertest(app)
      .post("/sign-up")
      .send({ user: userMockAleatory, image: null });
    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
  });

  it("should return a user", async () => {
    const response = await supertest(app)
      .post("/sign-in")
      .send({ email: userSeedMock.email });
    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
  });

  it("return a user by email", async () => {
    const token = createAuthToken({ idUser: userSeedMock.id });
    const response = await supertest(app)
      .get(`/user/${userSeedMock.email}`)
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
  });

  afterAll(async () => {
    sequelizeConnection.close();
  });
});
