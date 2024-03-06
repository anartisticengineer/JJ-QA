import { test as base } from "playwright/test";
import Header from "../components/header/header";
import HeaderValidator from "../validator/header.validator";
import HomePage from "../pages/home.page";

type HeaderFixtures = {
  header: Header;
  headerValidator: HeaderValidator;
};

export const test = base.extend<HeaderFixtures>({
  header: async ({ baseURL, page }, use) => {
    const homePage = new HomePage(page);
    const header = homePage.HEADER;
    await homePage.goto(baseURL || "/");
    await use(header);
  },
  headerValidator: async ({ page }, use) => {
    const headerValidator = new HeaderValidator(page);
    await use(headerValidator);
  },
});
