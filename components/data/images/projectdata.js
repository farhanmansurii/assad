import github from "../images/github2.png";
import calculatorminimal from "../images/calculatorminimal.png";
import hypebeast from "../images/hypebeast.png";
import javascript from "../images/javascript.png";
import {
  chakra,
  css3,
  electron,
  figma,
  html5,
  js,
  nextjs,
  nodejs,
  react,
  socketIO,
  storybook,
  tailwind,
  typescript,
} from "./tools";

export const projects = [
  {
    id: 1,
    title: "Github 2.0",
    description:
      " Search a github profile and its repositories and the users details using Github API  ",
    imageSrc: github,
    tools: [react, tailwind],
    url: "react-weather",
  },
  {
    id: 2,
    title: "Calculator",
    description: "Calculator made by inspiration from iphones calculator ",
    imageSrc: calculatorminimal,
    url: "install-node",
    tools: [html5, css3, js],
  },
  {
    id: 3,
    title: "Javascript Shooter Game",
    description:
      "two player javascript shooter multiplayer game consists of best of 5 contest  ",
    imageSrc: javascript,
    url: "use-state-hook",
    tools: [html5, css3, js],
  },
  {
    id: 4,
    title: "Hypebeast Shoe Store ",
    description: "Landing page of a luxury shoe selling website",
    imageSrc: hypebeast,
    url: "react-parallax",
    tools: [html5, css3, js],
  },
];
