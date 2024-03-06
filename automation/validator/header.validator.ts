import { Page } from "playwright";
import Header from "../components/header/header";
import BaseValidator from "./base.validator";

export default class HeaderValidator extends BaseValidator {
  private readonly header: Header;
  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
  }
  async verifyHomeLink(): Promise<void> {
    await this.verifyLink(this.header.HOME_LINK, "Home", "/");
  }
}
