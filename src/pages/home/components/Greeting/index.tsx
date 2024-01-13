import { useTheme } from "styled-components";
import { Section, Text, Link, Toasty } from "atoms";
import BackgroundImage from "assets/images/background.webp";
import SC from "./styles";

const Greeting = () => {
  const { palette } = useTheme();
  const textColor = palette.primary.contrastText;

  return (
    <Section bgImage={BackgroundImage}>
      <SC.Wrapper>
        <SC.Column>
          <Toasty>
            <SC.Info>
              <Text type="h1" color={textColor}>
                <Text color={textColor}>Hello, this is</Text> Vuong Vu
              </Text>
              <Text type="body" color={textColor}>
                <Text color={textColor}>I am a</Text> Frontend Engineer
              </Text>
              <Text color={textColor} type="body">
                <SC.NoWrap>
                  Want to know more <Link href="/#about-section">about me</Link>
                  ?
                </SC.NoWrap>
                <br />
                <SC.NoWrap>
                  checkout my <Link href="/#skills-section">skills</Link> and{" "}
                  <Link href="/#projects-section">projects</Link>.
                </SC.NoWrap>
              </Text>
            </SC.Info>
          </Toasty>
        </SC.Column>
      </SC.Wrapper>
    </Section>
  );
};

export default Greeting;
