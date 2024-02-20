import { Page } from "playwright";
import Header from "../components/header/header";

export default class BasePage {
  private readonly header: Header;
  private readonly footer: any;

  constructor(page: Page) {
    this.header = new Header(page.getByTestId("header"));
  }

  public get HEADER(): Header {
    return this.header;
  }

  public get FOOTER() {
    return this.footer;
  }
}
