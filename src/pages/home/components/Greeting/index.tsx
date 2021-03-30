import { useTheme } from "styled-components";
import { Section, Text } from "atoms";
import BackgroundImage from "assets/images/background.webp";
import SC from "./styles";

const Greeting = () => {
  const { palette } = useTheme();
  const textColor = palette.primary.contrastText;

  return (
    <Section bgImage={BackgroundImage}>
      <SC.Wrapper>
        <SC.Column>
          <SC.Info>
            <Text type="h1" color={textColor}>
              <Text color={textColor}>Hi, this is</Text> Vuong Vu
            </Text>
            <Text type="h3" color={textColor}>
              <Text color={textColor}>I'm a</Text> Frontend Developer
            </Text>
            <Text color={textColor}>
              want to know more{" "}
              <SC.Link href="/#about-section">about me</SC.Link>? checkout my{" "}
              <SC.Link href="/#skills-section">skills</SC.Link> and{" "}
              <SC.Link href="/#projects-section">projects</SC.Link>
            </Text>
          </SC.Info>
        </SC.Column>
      </SC.Wrapper>
    </Section>
  );
};

export default Greeting;
