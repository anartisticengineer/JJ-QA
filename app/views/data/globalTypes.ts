export interface Link {
  href: string;
  linkName: string;
}

export interface IconLink {
  link: Link;
  icon: string;
}

export interface Experience {
  fromDate: Date;
  toDate?: Date;
  companyName: string;
  summary: string[];
}
