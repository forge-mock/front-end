import { Tab } from "../interfaces/tab";

const DESKTOP_TABS: Tab[] = [
  {
    icon: "/layout/constructor.svg",
    title: "Constructor",
    path: "/",
  },
  {
    icon: "/layout/schema.svg",
    title: "Schemas",
    path: "/schema",
  },
  {
    icon: "/layout/docs.svg",
    title: "Documentation",
    path: "/docs",
  },
  {
    icon: "/layout/about.svg",
    title: "About",
    path: "/about",
  },
  {
    icon: "/layout/feedback.svg",
    title: "Feedback",
    path: "/feedback",
  },
];

const MOBILE_TABS: Tab[] = [
  {
    icon: "/layout/account.svg",
    title: "Account",
    path: "/account",
  },
  ...DESKTOP_TABS,
];

export { DESKTOP_TABS, MOBILE_TABS };
