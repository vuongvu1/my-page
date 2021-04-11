import wiretap from "assets/images/wiretap.webp";
import passgowhere from "assets/images/passgowhere.webp";
import til from "assets/images/today-i-learned.webp";
import reacteasylocalization from "assets/images/react-easy-localization.webp";
import ea from "assets/images/ea.webp";
import dls from "assets/images/dls.webp";
import eaProjectDetail from "assets/images/ea";
import dlsProjectDetail from "assets/images/dls";

const projects = [
  {
    imgSrc: wiretap,
    title: "Wiretap for Chrome",
    url: "https://wiretap.co/",
    techStack: ["React", "Redux", "Node.js"],
    desc:
      "A Chrome extension that lets users comment, share, socialize... while using Netflix.",
  },
  {
    imgSrc: ea,
    title: "EA Creative Hub",
    modalContent: eaProjectDetail,
    techStack: ["React", "Redux", "Nuxeo"],
    desc: "An internal Content Management System made for EA products.",
  },
  {
    imgSrc: reacteasylocalization,
    title: "react-easy-localization",
    url: "https://www.npmjs.com/package/react-easy-localization",
    techStack: ["JavaScript", "Babel"],
    githubUrl: "https://github.com/vuongvu1/react-easy-localization",
    desc:
      "A simple Node module that helps React applications to implement language internalization easily.",
  },
  {
    imgSrc: dls,
    title: "Design Language System",
    modalContent: dlsProjectDetail,
    techStack: ["React", "Storybook"],
    desc:
      "An enterprise-level design system with high-quality components, performance optimized, to create a similar user experience among Singtel products.",
  },
  {
    imgSrc: passgowhere,
    title: "PassGoWhere",
    url: "https://pass.gowhere.gov.sg/",
    techStack: ["React", "Redux", "Tailwind"],
    desc:
      "A web application that allows Singapore foreign workers to apply for an Exit Pass to go outside of their dormitories with some specific timeslots, in order to control the spread of COVID-19.",
  },
  {
    imgSrc: til,
    title: "Today I Learned",
    url: "https://til.vuongvu.me/",
    techStack: ["React", "Gatsby"],
    githubUrl: "https://github.com/vuongvu1/today-i-learned",
    desc:
      "A place I share what I've learned, to keep notes, and look up to when necessary.",
  },
];

export default projects;
