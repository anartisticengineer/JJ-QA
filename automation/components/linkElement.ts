import { Locator } from "playwright";
import BaseComponent from "./baseComponent";

export default class LinkElement extends BaseComponent {
  private label: string;
  private href: string;
  constructor(container: Locator, label: string, href: string) {
    super(container);
    this.label = label;
    this.href = href;
  }

  public get HREF(): string {
    return this.href;
  }

  public get LINK(): Locator {
    return this.container.getByRole("link", { name: this.label });
  }
}
