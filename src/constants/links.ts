export const PAGES = {
  main: "/",
  contact: "/contact",
  work: "/work",
  styleGuide: "/style-guide",
} as const;

export const EXTERNAL_LINKS = {
  linkedIn: "https://www.linkedin.com/in/joshpost/",
  github: "https://github.com/posty72",
} as const;

type ValueOf<T> = T[keyof T];

export type LinkInConfig = ValueOf<typeof PAGES & typeof EXTERNAL_LINKS>;
