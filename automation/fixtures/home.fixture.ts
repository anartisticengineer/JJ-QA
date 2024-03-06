import { test as base } from "playwright/test";
import HomePage from "../pages/home.page";

export const test = base.extend<{ homePage: HomePage }>({
  homePage: async ({ baseURL, page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto(baseURL || "/");
    await use(homePage);
  },
});
