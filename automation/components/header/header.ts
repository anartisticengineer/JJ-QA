import { Locator } from "playwright";
import BaseComponent from "../baseComponent";
import LinkElement from "../linkElement";

export default class Header extends BaseComponent {
  constructor(container: Locator) {
    super(container);
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
