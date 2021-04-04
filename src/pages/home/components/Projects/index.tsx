import { useTheme } from "styled-components";
import { Section, Text, Card, Link } from "atoms";
import cat from "assets/images/cat.webp";
import wiretap from "assets/images/wiretap.webp";
import passgowhere from "assets/images/passgowhere.webp";
import reactEasyLocalization from "assets/images/react-easy-localization.webp";
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
          <Card
            imgSrc={reactEasyLocalization}
            title="react-easy-localization"
            url="https://www.npmjs.com/package/react-easy-localization"
          >
            A simple Node module built on top of{" "}
            <Link
              href="https://www.npmjs.com/package/react-localization"
              color={palette.primary.main}
            >
              react-localization
            </Link>{" "}
            package that helps React apps to implement language support easily.
          </Card>
          <Card imgSrc={cat} title="Design Language System">
            A private Node package that includes high-quality components to
            create the same user experience for Singtel products.
          </Card>
          <Card
            imgSrc={passgowhere}
            title="PassGoWhere"
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
