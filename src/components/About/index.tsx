import { useTheme } from "styled-components";
import { Section } from "atoms";
import { Image, Text } from "atoms";
import avatar from "assets/images/cat.webp";
import SC from "./styles";

const About = () => {
  const theme = useTheme();

  return (
    <Section bgColor={theme.palette.common.light}>
      <SC.Wrapper>
        <SC.Column>
          <Image src={avatar} alt="avatar" type={2} />
        </SC.Column>
        <SC.Column>
          <SC.Info>
            <Text type="h1">About me</Text>
            <Text type="body">Hey, my name's Vuong Vu.</Text>
            <Text type="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              feugiat tortor velit, vitae commodo ex malesuada et. Morbi
              bibendum hendrerit lectus, sed molestie tellus porttitor et. Nulla
              cursus arcu purus, id lobortis est ornare et.
            </Text>
            <Text type="body">
              Phasellus rhoncus, nisi et finibus porta, massa nisi luctus nulla,
              at blandit quam ex sit amet ante. Donec pulvinar cursus magna vel
              lacinia. Ut feugiat nec justo nec eleifend. Aenean nulla odio,
              facilisis quis nisl a, sollicitudin cursus nibh. Quisque ac
              sagittis justo. Donec tempor ex at nisi porta sodales. Nullam
              luctus nulla et elementum tincidunt.
            </Text>
          </SC.Info>
        </SC.Column>
      </SC.Wrapper>
    </Section>
  );
};

export default About;
