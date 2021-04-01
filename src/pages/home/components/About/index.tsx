import { useTheme } from "styled-components";
import { Section } from "atoms";
import { Image, Text, Link } from "atoms";
import avatar from "assets/images/avatar.webp";
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
            <a href="https://stackoverflow.com/users/10649754/vuongvu">
              <img
                src="https://stackoverflow.com/users/flair/10649754.png"
                width="208"
                height="58"
                alt="profile for vuongvu at Stack Overflow"
                title="profile for vuongvu at Stack Overflow"
              />
            </a>
            <Text type="h1" color={palette.primary.main}>
              About Me
            </Text>
            <Text type="body" color={palette.primary.main}>
              Hi, My name's Vuong Vu. I'm a frontend developer from Ho Chi Minh
              city, Vietnam and currently working at{" "}
              <Link href="https://www.2359.co/" color={palette.primary.main}>
                2359 Media
              </Link>
              , Singapore.
            </Text>
            <Text>
              I have 4 years of working professionally, of which 3 years
              experience with React.
            </Text>
          </SC.Info>
        </SC.Column>
      </SC.Wrapper>
    </Section>
  );
};

export default About;
