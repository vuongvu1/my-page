import git from "assets/images/git.webp";
import vscode from "assets/images/vscode.webp";
import redux from "assets/images/redux.webp";
import nodejs from "assets/images/nodejs.webp";
import reactnative from "assets/images/react-native.webp";
import react from "assets/images/react.webp";
import javascript from "assets/images/javascript.webp";
import typescript from "assets/images/typescript.webp";
import docker from "assets/images/docker.webp";

const skills = [
  {
    title: "Languages",
    items: [
      { logo: javascript, name: "JavaScript" },
      { logo: typescript, name: "TypeScript" },
    ],
  },
  {
    title: "Technologies",
    items: [
      { logo: react, name: "React" },
      { logo: redux, name: "Redux" },
      { logo: reactnative, name: "React Native" },
      { logo: nodejs, name: "Nodejs" },
    ],
  },
  {
    title: "Tools",
    items: [
      { logo: vscode, name: "VSCode" },
      { logo: docker, name: "Docker" },
      { logo: git, name: "Git" },
    ],
  },
];

export default skills;
