import { Experience, FormattedDate } from "../types/globalTypes";

const experiences: Experience[] = [
  {
    fromDate: FormattedDate.getFormattedDate("Mar", 2023),
    toDate: FormattedDate.getFormattedDate("Feb", 2024),
    role: "SDET",
    companyName: "Chipotle Mexican Grill",
    summary: [
      "Assisted in transistion from WebdriverIO/Selenium to Playwright automation framework",
      "Executed test scripts across environments in 5 countries and 3 browsers",
      "Performed manual smoke tests for bi-weekly feature releases",
      "Reduced time for end to end regression testing by 40%",
      "Collaborated across multiple teams and vendors in a remote work environment",
    ],
  },
  {
    fromDate: FormattedDate.getFormattedDate("Aug", 2021),
    toDate: FormattedDate.getFormattedDate("Feb", 2023),
    role: "Quality Assurance Developer",
    companyName: "StickerGiant",
    summary: [
      "Monitored test cases and test plans in Jira and Xray; tests cover 5 features per sprint on average",
      "Implemented Github Actions and AWS CodeBuild to automate daily test runs",
      "Reduced testing time by a minimum of 30% with parallelization",
      "Monitored Cypress and Postman test automation suites with over 300 tests",
      "Introduced automated testing to a new 4 person feature team; initially 100% manual testing",
    ],
  },
  {
    fromDate: FormattedDate.getFormattedDate("Apr", 2021),
    toDate: FormattedDate.getFormattedDate("Aug", 2021),
    role: "Quality Assurance Apprentice",
    companyName: "StickerGiant",
    summary: [
      "Validated user interface functionality across 3 different viewpoints: desktop, tablet and mobile",
      "Applied black box testing strategies to develop over 100 integration and system tests",
      "Optimized Cypress test suite by initiating over 15 reusable page objects",
      "Reported bugs and test results over 2 week sprints in Jira",
      "Collaborated on an Agile team of up to 7 developers",
      "Reduced rate of bugs by at least 50% upon joining the team",
    ],
  },
];

const skills: string[] = [
  "Cypress",
  "Playwright",
  "Postman",
  "Git",
  "JavaScript/TypeScript",
  "Python",
  "Jira + Xray/Zephyr",
  "Qtest",
];

export { experiences, skills };
