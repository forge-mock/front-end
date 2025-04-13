import ConstructorIcon from "@assets/layout/constructor.svg";
import SchemaIcon from "@assets/layout/schema.svg";
import DocsIcon from "@assets/layout/docs.svg";
import InfoIcon from "@assets/shared/info.svg";
import FeedbackIcon from "@assets/layout/feedback.svg";
import { Tab } from "./interfaces";

const TABS: Tab[] = [
  {
    Icon: ConstructorIcon,
    title: "Constructor",
    path: "/",
    ariaLabel: "Go to constructor",
  },
  {
    Icon: SchemaIcon,
    title: "Schemas",
    path: "/schema",
    ariaLabel: "Go to schema",
  },
  {
    Icon: DocsIcon,
    title: "Documentation",
    path: "docs",
    ariaLabel: "Go to documentation",
  },
  {
    Icon: InfoIcon,
    title: "About",
    path: "/about",
    ariaLabel: "Go to about",
  },
  {
    Icon: FeedbackIcon,
    title: "Feedback",
    path: "/feedback",
    ariaLabel: "Go to feedback",
  },
];

export { TABS };
