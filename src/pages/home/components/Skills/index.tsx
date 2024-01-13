import { useTheme } from "styled-components";
import { Section, Text, Box, Toastify } from "atoms";
import background from "assets/images/background-2.webp";
import skills from "./skills";
import SC from "./styles";

const Skills = () => {
  const { palette } = useTheme();

  return (
    <Section bgImage={background} id="skills-section">
      <SC.Wrapper>
        <SC.Title>
          <Toastify>
            <Text type="h1" color={palette.primary.contrastText}>
              My Skills
            </Text>
          </Toastify>
        </SC.Title>
        <SC.Body>
          {skills.map((skill, index) => (
            <Toastify key={skill.title} delay={`${(index + 1) * 100}ms`}>
              <Box {...skill} />
            </Toastify>
          ))}
        </SC.Body>
      </SC.Wrapper>
    </Section>
  );
};

export default Skills;
