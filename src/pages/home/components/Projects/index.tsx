import { useTheme } from "styled-components";
import { Section, Text, Card, Link } from "atoms";
import wiretap from "assets/images/wiretap.webp";
import passgowhere from "assets/images/passgowhere.webp";
import til from "assets/images/today-i-learned.webp";
import reacteasylocalization from "assets/images/react-easy-localization.webp";
import ea from "assets/images/ea.webp";
import dls from "assets/images/dls.webp";
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
            imgSrc={ea}
            title="EA Creative Hub"
            modalContent={[ea, til, dls]}
          >
            An internal Content Management System made for EA products.
          </Card>
          <Card
            imgSrc={reacteasylocalization}
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
            that helps React applications to implement language internalization
            easily.
          </Card>
          <Card imgSrc={dls} title="Design Language System">
            An enterprise-level design system with high-quality components,
            performance optimized, to create a similar user experience among
            Singtel products.
          </Card>
          <Card
            imgSrc={passgowhere}
            title="PassGoWhere"
            url="https://pass.gowhere.gov.sg/"
          >
            A web application that allows Singapore foreign workers to apply for
            an Exit Pass to go outside of their dormitories with some specific
            timeslots, in order to control the spread of COVID-19.
          </Card>
          <Card
            imgSrc={til}
            title="Today I Learned"
            url="https://til.vuongvu.me/"
          >
            A place I share what I've learned, to keep notes, and look up to
            when necessary.
          </Card>
        </SC.Body>
      </SC.Wrapper>
    </Section>
  );
};

export default Projects;
