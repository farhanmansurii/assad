import github from "../images/github2.png";
import calculatorminimal from "../images/calculatorminimal.png";
import hypebeast from "../images/hypebeast.png";
import javascript from "../images/javascript.png";
import portfolio from "../images/portfolio.png";
import {
  chakra,
  chakraui,
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
    title: "Farhan Mansuri Portfolio ",
    description:
      " responsive and interactive website with dark mode and all about me and details about the works ive done",
    imageSrc: portfolio,
    tools: [nextjs, chakraui],
    live: "https://farhanmansuri.vercel.app/",
    url: "https://github.com/farhanmansurii/portfolio",
  },
  {
    id: 1,
    title: "Github 2.0",
    description:
      " Search a github profile and its repositories and the users details using Github API  ",
    imageSrc: github,
    tools: [react, tailwind],
    live: "https://morning-retreat-49586.herokuapp.com/",
    url: "https://github.com/farhanmansurii/githubclone",
  },
  {
    id: 2,
    title: "Calculator",
    description: "Calculator made by inspiration from iphones calculator ",
    imageSrc: calculatorminimal,
    live: "https://calculator-minimal.vercel.app/",
    url: "https://github.com/farhanmansurii/calculator-minimal",
    tools: [html5, css3, js],
  },
  {
    id: 3,
    title: "Javascript Shooter Game",
    description:
      "two player javascript shooter multiplayer game consists of best of 5 contest  ",
    imageSrc: javascript,
    live: "https://codepen.io/farhanmansurii/full/JjMmoMg",
    url: "https://github.com/farhanmansurii/javascript-shooter-game",
    tools: [html5, css3, js],
  },
  {
    id: 4,
    title: "Hypebeast Shoe Store ",
    description: "Landing page of a luxury shoe selling website",
    imageSrc: hypebeast,
    live: "https://hypebeastshoestore.herokuapp.com/",
    url: "https://github.com/farhanmansurii/hypebeastshoestore",
    tools: [html5, css3, js],
  },
];
