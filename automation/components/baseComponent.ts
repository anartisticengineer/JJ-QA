import { Locator } from "playwright";

export default class BaseComponent {
  protected readonly container: Locator;
  constructor(container: Locator) {
    this.container = container;
  }

  public get CONTAINER(): Locator {
    return this.container;
  }

  async scrollToElem() {
    await this.container.scrollIntoViewIfNeeded();
  }
}
