import { useTheme } from "styled-components";
import { Section } from "atoms";
import { Image } from "atoms";
import avatar from "assets/images/cat.webp";
import SC from "./styles";

const About = () => {
  const theme = useTheme();

  return (
    <Section bgColor={theme.palette.common.light}>
      <SC.Wrapper>
        <SC.Column>
          <Image src={avatar} alt="avatar" />
        </SC.Column>
        <SC.Column>ten</SC.Column>
      </SC.Wrapper>
    </Section>
  );
};

export default About;
