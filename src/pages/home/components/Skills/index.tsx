import { useTheme } from "styled-components";
import { Section, Text, Box } from "atoms";
import background from "assets/images/background-2.webp";
import skills from "./skills";
import SC from "./styles";

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
          {skills.map((skill) => (
            <Box key={skill.title} {...skill} />
          ))}
        </SC.Body>
      </SC.Wrapper>
    </Section>
  );
};

export default Skills;
