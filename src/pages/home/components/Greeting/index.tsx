import { useTheme } from "styled-components";
import { Section, Text } from "atoms";
import BackgroundImage from "assets/images/background.webp";
import SC from "./styles";

const Greeting = () => {
  const { palette } = useTheme();

  return (
    <Section bgImage={BackgroundImage}>
      <SC.Wrapper>
        <SC.Column>
          <SC.Info>
            <Text type="h1" color={palette.primary.contrastText}>
              Hi, I'm Vuong Vu
            </Text>
            <Text type="h3" color={palette.primary.contrastText}>
              Frontend Developer
            </Text>
            <Text color={palette.primary.contrastText}>
              Want to know more{" "}
              <SC.Link href="/#about-section">about me</SC.Link>? Checkout my{" "}
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
