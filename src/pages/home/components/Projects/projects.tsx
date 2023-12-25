import { Link } from "atoms";
import wiretap from "assets/images/wiretap.webp";
import passgowhere from "assets/images/passgowhere.webp";
import til from "assets/images/today-i-learned.webp";
import reacteasylocalization from "assets/images/react-easy-localization.webp";
import reactPopoverLite from "assets/images/react-popover-lite.webp";
import ea from "assets/images/ea.webp";
import dls from "assets/images/dls.webp";
import gie from "assets/images/github-issues-explorer.webp";
import eaProjectDetail from "assets/images/ea";
import dlsProjectDetail from "assets/images/dls";
import gieProjectDetail from "assets/images/gie";

const projects = [
  {
    imgSrc: ea,
    title: "EA Creative Hub",
    modalContent: eaProjectDetail,
    techStack: ["React", "Redux", "Nuxeo"],
    desc: "An internal Content Management System made for EA products.",
  },
  {
    imgSrc: dls,
    title: "Design Language System",
    modalContent: dlsProjectDetail,
    techStack: ["React", "Storybook"],
    desc: "An enterprise-level design system with high-quality components, performance optimized, to create a similar user experience among Singtel products.",
  },
  {
    imgSrc: passgowhere,
    title: "PassGoWhere",
    url: "https://pass.gowhere.gov.sg/",
    techStack: ["React", "TypeScript", "Tailwind"],
    desc: "A web application that allows Singapore foreign workers to apply for an Exit Pass to go outside of their dormitories with some specific timeslots, in order to control the spread of COVID-19.",
  },
  {
    imgSrc: wiretap,
    title: "Wiretap for Chrome",
    url: "https://blog.wiretap.co/",
    techStack: ["React", "Redux", "Node.js"],
    desc: "A Chrome extension that lets users comment, share, socialize... while using Netflix.",
  },
  {
    imgSrc: reacteasylocalization,
    title: "react-easy-localization",
    url: "https://www.npmjs.com/package/react-easy-localization",
    techStack: ["JavaScript", "Babel"],
    githubUrl: "https://github.com/vuongvu1/react-easy-localization",
    desc: "A simple Node module that helps React applications to implement language internalization easily.",
  },
  {
    imgSrc: til,
    title: "Today I Learned",
    url: "https://til.vuongvu.xyz/",
    techStack: ["React", "Gatsby"],
    githubUrl: "https://github.com/vuongvu1/today-i-learned",
    desc: "A place I share what I've learned, to keep notes, and look up to when necessary.",
  },
  {
    imgSrc: reactPopoverLite,
    title: "react-popover-lite",
    url: "https://www.npmjs.com/package/react-popover-lite",
    techStack: ["React", "TypeScript"],
    githubUrl: "https://github.com/vuongvu1/react-popover-lite",
    desc: "A simple popover React higher-order component with zero dependencies, TypeScript support.",
  },
  {
    imgSrc: gie,
    title: "github-issues-explorer",
    modalContent: gieProjectDetail,
    techStack: ["React", "TypeScript", "GraphQL"],
    githubUrl: "https://github.com/vuongvu1/github-issues-explorer",
    desc: (
      <span>
        A small client application using{" "}
        <Link
          href="https://docs.github.com/en/graphql"
          target="_blank"
          color="#014421"
        >
          GitHub GraphQL API.
        </Link>
      </span>
    ),
  },
];

export default projects;
