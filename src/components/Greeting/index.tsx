import { Section } from "components";
import { useTheme } from "styled-components";
import { Image } from "atoms";
import avatar from "assets/images/cat.webp";
import SC from "./styles";

const Greeting = () => {
  const theme = useTheme();

  return (
    <Section bgColor={theme.palette.primary.main}>
      <SC.Wrapper>
        <SC.Column>ten</SC.Column>
        <SC.Column>
          <Image src={avatar} alt="avatar" />
        </SC.Column>
      </SC.Wrapper>
    </Section>
  );
};

export default Greeting;
