import { useTheme } from "styled-components";
import { Section } from "atoms";
import { Image, Text } from "atoms";
import avatar from "assets/images/cat.webp";
import SC from "./styles";

const About = () => {
  const { palette } = useTheme();

  return (
    <Section bgColor={palette.common.light} id="about-section">
      <SC.Wrapper>
        <SC.Column>
          <Image src={avatar} alt="avatar" type={2} />
        </SC.Column>
        <SC.Column>
          <SC.Info>
            <Text type="h1" color={palette.primary.main}>
              About me
            </Text>
            <Text type="body" color={palette.primary.main}>
              Hey, my name's Vuong Vu.
            </Text>
            <Text type="body" color={palette.primary.main}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              feugiat tortor velit, vitae commodo ex malesuada et.
            </Text>
            <Text type="body" color={palette.primary.main}>
              Phasellus rhoncus, nisi et finibus porta, massa nisi luctus nulla,
              at blandit quam ex sit amet ante. Donec pulvinar cursus magna vel
              lacinia. Ut feugiat nec justo nec eleifend.
            </Text>
          </SC.Info>
        </SC.Column>
      </SC.Wrapper>
    </Section>
  );
};

export default About;
