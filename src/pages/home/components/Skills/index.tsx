import { useTheme } from "styled-components";
import { Section, Text, Box } from "atoms";
import background from "assets/images/background-2.webp";
import git from "assets/images/git.webp";
import vscode from "assets/images/vscode.webp";
import redux from "assets/images/redux.webp";
import nodejs from "assets/images/nodejs.webp";
import reactnative from "assets/images/react-native.webp";
import react from "assets/images/react.webp";
import javascript from "assets/images/javascript.webp";
import typescript from "assets/images/typescript.webp";
import docker from "assets/images/docker.webp";
import SC from "./styles";

const Languages = [
  { logo: javascript, name: "JavaScript" },
  { logo: typescript, name: "TypeScript" },
];

const Technologies = [
  { logo: react, name: "React" },
  { logo: redux, name: "Redux" },
  { logo: reactnative, name: "React Native" },
  { logo: nodejs, name: "Nodejs" },
];

const Tools = [
  { logo: vscode, name: "VSCode" },
  { logo: docker, name: "Docker" },
  { logo: git, name: "Git" },
];

const Skills = () => {
  const { palette } = useTheme();

  return (
    <Section bgImage={background} id="skills-section">
      <SC.Wrapper>
        <SC.Title>
          <Text type="h1" color={palette.primary.contrastText}>
            My Skills
          </Text>
        </SC.Title>
        <SC.Body>
          <Box title="Languages" items={Languages} />
          <Box title="Technologies" items={Technologies} />
          <Box title="Tools" items={Tools} />
        </SC.Body>
      </SC.Wrapper>
    </Section>
  );
};

export default Skills;
