import { useTheme } from "styled-components";
import { Section } from "atoms";
import { Image, Text } from "atoms";
import avatar from "assets/images/avatar.webp";
import SC from "./styles";

const About = () => {
  const { palette } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Section bgColor={palette.common.light} id="about-section">
      <SC.Wrapper>
        <SC.Column>
          <Image src={avatar} alt="avatar" type={2} />
        </SC.Column>
        <SC.Column>
          <SC.Info>
            <a
              href="https://stackoverflow.com/users/10649754/vuongvu"
              target="_blank"
              rel="noreferrer"
            >
              <img
                loading="lazy"
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
              My name is Vuong Vu, a {currentYear - 1994}-year-old Frontend
              Engineer from Vietnam, currently living in Berlin, Germany. I have
              more than {currentYear - 2018} years of professional experience,
              with {currentYear - 2019} years of expertise in React.
            </Text>
            <Text type="body" color={palette.primary.main}>
              I love programming and am passionate about building applications
              that help improve people's lives.
            </Text>
            <Text type="body" color={palette.primary.main}>
              I also enjoy hiking, playing the piano, and finding joy in life's
              smallest moments.
            </Text>
          </SC.Info>
        </SC.Column>
      </SC.Wrapper>
    </Section>
  );
};

export default About;
