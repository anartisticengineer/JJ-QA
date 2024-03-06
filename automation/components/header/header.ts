import { Page } from "playwright";
import BaseComponent from "../baseComponent";
import LinkElement from "../linkElement";

const testId = "header";
export default class Header extends BaseComponent {
  constructor(page: Page) {
    super(page.getByTestId(testId));
  }

  public get HOME_LINK(): LinkElement {
    return new LinkElement(this.CONTAINER, "Home", "/");
  }

  public get ABOUT_LINK(): LinkElement {
    return new LinkElement(this.CONTAINER, "About Me", "/about");
  }

  public get RESUME_LINK(): LinkElement {
    return new LinkElement(this.CONTAINER, "Resume", "/resume");
  }

  public get CONTACT_LINK(): LinkElement {
    return new LinkElement(this.CONTAINER, "Contact", "/contact");
  }
}
