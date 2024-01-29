import { loginUser } from "../../../src/api/user-auth";

describe("user_auth", () => {
  test("login", async () => {
    expect(await loginUser()).not.toBeNull();
  });
});
