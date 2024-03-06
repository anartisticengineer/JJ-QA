import { Locator } from "playwright";
import { Page, expect } from "playwright/test";
import LinkElement from "../components/linkElement";

export default class BaseValidator {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async verifyText(element: Locator, text: string): Promise<void> {
    expect(element).toHaveText(text);
  }

  async verifyHref(element: Locator, href: string): Promise<void> {
    expect(element).toHaveAttribute("href", href);
  }

  async verifyLink(
    link: LinkElement,
    label: string,
    href: string
  ): Promise<void> {
    await this.verifyText(link.LINK, label);
    await this.verifyHref(link.LINK, href);
  }
}
