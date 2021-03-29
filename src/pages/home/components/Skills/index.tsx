import { useTheme } from "styled-components";
import { Section, Text, Box } from "atoms";
import cat from "assets/images/cat.webp";
import BackgroundImage from "assets/images/background-2.webp";
import SC from "./styles";

const Languages = [
  { logo: cat, name: "JavaScript" },
  { logo: cat, name: "TypeScript" },
];
const Technologies = [
  { logo: cat, name: "React" },
  { logo: cat, name: "React Native" },
  { logo: cat, name: "Nodejs" },
  { logo: cat, name: "Redux" },
];
const Tools = [
  { logo: cat, name: "VSCode" },
  { logo: cat, name: "Git" },
];

const Skills = () => {
  const { palette } = useTheme();

  return (
    <Section bgImage={BackgroundImage} id="skills-section">
      <SC.Wrapper>
        <Text type="h1" color={palette.primary.contrastText}>
          My Skills
        </Text>
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
