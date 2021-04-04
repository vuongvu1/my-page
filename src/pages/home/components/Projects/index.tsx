import { useTheme } from "styled-components";
import { Section, Text, Card } from "atoms";
import cat from "assets/images/cat.webp";
import wiretap from "assets/images/wiretap.webp";
import passgowhere from "assets/images/passgowhere.webp";
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
            A Chrome extension that lets users comment, share, socialize...
            while using Netflix.
          </Card>
          <Card imgSrc={cat} title="Project Name">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Card>
          <Card imgSrc={cat} title="Project Name">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            feugiat tortor velit, vitae commodo ex malesuada et.
          </Card>
          <Card
            imgSrc={passgowhere}
            title="Pass Go Where"
            url="https://pass.gowhere.gov.sg/"
          >
            A web app that allows Singapore foreign workers to apply for an Exit
            Pass to go outside of their dormitories with some specific
            timeslots, in order to control the spread of COVID-19.
          </Card>
        </SC.Body>
      </SC.Wrapper>
    </Section>
  );
};

export default Projects;
