import git from "assets/images/git.webp";
import vscode from "assets/images/vscode.webp";
import redux from "assets/images/redux.webp";
import nodejs from "assets/images/nodejs.webp";
import reactnative from "assets/images/react-native.webp";
import react from "assets/images/react.webp";
import javascript from "assets/images/javascript.webp";
import typescript from "assets/images/typescript.webp";
import docker from "assets/images/docker.webp";
import graphql from "assets/images/graphql.webp";
import html from "assets/images/html.webp";
import css from "assets/images/css.webp";
import storybook from "assets/images/storybook.webp";

const skills = [
  {
    title: "Languages",
    items: [
      { logo: javascript, name: "JavaScript" },
      { logo: html, name: "HTML" },
      { logo: css, name: "CSS" },
      { logo: typescript, name: "TypeScript" },
    ],
  },
  {
    title: "Technologies",
    items: [
      { logo: react, name: "React" },
      { logo: redux, name: "Redux" },
      { logo: reactnative, name: "React Native" },
      { logo: graphql, name: "GraphQL" },
      { logo: nodejs, name: "Nodejs" },
      { logo: storybook, name: "Storybook" },
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
