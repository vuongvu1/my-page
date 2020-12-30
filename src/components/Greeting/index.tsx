import { useTheme } from "styled-components";
import { Section, Image, Text } from "atoms";
import avatar from "assets/images/cat.webp";
import SC from "./styles";

const Greeting = () => {
  const theme = useTheme();

  return (
    <Section bgColor={theme.palette.primary.main}>
      <SC.Wrapper>
        <SC.Column>
          <SC.Info>
            <Text type="h1">Hi, I'm Vuong Vu</Text>
            <Text type="h2">Frontend Web Developer</Text>
          </SC.Info>
        </SC.Column>
        <SC.Column>
          <Image src={avatar} alt="avatar" />
        </SC.Column>
      </SC.Wrapper>
    </Section>
  );
};

export default Greeting;
