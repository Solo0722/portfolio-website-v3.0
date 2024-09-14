import { Dispatch, SetStateAction } from "react";

export const MEDIA_QUERIES = {
  MOBILE: "@media only screen and (max-width: 486px)",
  TABLET: "@media only screen and (min-width: 486px) and (max-width: 1000px)",
  LAPTOP: "@media only screen and (min-width: 1000px) and (max-width: 1024px)",
  DESKTOP: "@media only screen and (min-width: 1025px) and (max-width: 1200px)",
  TV: "@media only screen and (min-width: 1201px)",
};

export const COLORS = {
  PRIMARY_COLOR: "#FF0038",
  TEXT_COLOR: "#D5D9EB",
  SECONDARY_TEXT_COLOR:"#D5D9EB50",
  BACKGROUND_COLOR: "#19142A",
  SECONDARY_BACKGROUND_COLOR: "#2A2344",
};

export const NAV_LINKS = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Blogs",
    url: "#blogs",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/solomon-owusu-ansah-a68668223",
  },
  {
    name: "Github",
    link: "https://github.com/solo0722",
  },
];

export type SetPhase = Dispatch<SetStateAction<number>>;