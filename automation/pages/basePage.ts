import { Page } from "playwright";
import Header from "../components/header/header";

export default class BasePage {
  private page: Page;
  private readonly header: Header;
  private readonly footer: any;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page.getByTestId("header"));
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  public get HEADER(): Header {
    return this.header;
  }

  public get FOOTER() {
    return this.footer;
  }
}
