export interface Link {
  href: string;
  linkName: string;
}

export interface IconLink {
  link: Link;
  icon: string;
}

export type Month =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

export class FormattedDate {
  static getFormattedDate(month: Month, year: number | string): string {
    if (typeof year === "number") {
      if (year < 2000) {
        throw Error(
          "you were definitely not working at this time. you were 5 years old!"
        );
      }
    } else if (typeof year === "string") {
      if (/20[0-9]\d/.test(year) !== false) {
        throw Error(
          "something is up with the way you formatted the year string"
        );
      }
    }
    return `${month} ${year}`;
  }
}

export interface Experience {
  fromDate: string;
  toDate?: string;
  role: string;
  companyName: string;
  summary: string[];
}

export interface ContactReason {
  name: string;
  value: string;
}
