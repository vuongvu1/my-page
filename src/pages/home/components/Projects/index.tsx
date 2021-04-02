import { useTheme } from "styled-components";
import { Section, Text, Card } from "atoms";
import cat from "assets/images/cat.webp";
import wiretap from "assets/images/wiretap.webp";
import SC from "./styles";

const Projects = () => {
  const { palette } = useTheme();

  return (
    <Section id="projects-section">
      <SC.Wrapper>
        <Text type="h1" color={palette.primary.contrastText}>
          Some Projects
        </Text>
        <SC.Body>
          <Card
            imgSrc={wiretap}
            title="Wiretap for Chrome"
            url="https://wiretap.co/"
          >
            A Chrome extension that lets Netflix users comment, share,
            socialize... Netflix content
          </Card>
          <Card imgSrc={cat} title="Project Name">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Card>
          <Card imgSrc={cat} title="Project Name">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            feugiat tortor velit, vitae commodo ex malesuada et.
          </Card>
          <Card imgSrc={cat} title="Project Name">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            feugiat tortor velit, vitae commodo ex malesuada et.
          </Card>
        </SC.Body>
      </SC.Wrapper>
    </Section>
  );
};

export default Projects;
