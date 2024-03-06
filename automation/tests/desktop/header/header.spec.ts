import { test } from "../../../fixtures/header.fixture";

test.describe("Header - Desktop", () => {
  test.only("Home link @smoke", async ({ headerValidator }) => {
    await headerValidator.verifyHomeLink();
  });
  test("About link @smoke", async ({ headerValidator }) => {});
  test("Resume link @smoke", async ({ headerValidator }) => {});
  test("Contact link @smoke", async ({ headerValidator }) => {});
});
