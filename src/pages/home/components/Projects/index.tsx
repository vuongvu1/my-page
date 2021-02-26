import { useTheme } from "styled-components";
import { Section, Text, Card } from "atoms";
import cat from "assets/images/cat.webp";
import SC from "./styles";

const Projects = () => {
  const { palette } = useTheme();

  return (
    <Section id="projects-section">
      <SC.Wrapper>
        <Text type="h1" color={palette.primary.contrastText}>
          Projects
        </Text>
        <SC.Body>
          <Card
            imgSrc={cat}
            title="Project Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor velit, vitae commodo ex malesuada et. "
          />
          <Card
            imgSrc={cat}
            title="Project Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          />
          <Card
            imgSrc={cat}
            title="Project Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor velit, vitae commodo ex malesuada et. "
          />
          <Card
            imgSrc={cat}
            title="Project Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor velit, vitae commodo ex malesuada et. "
          />
        </SC.Body>
      </SC.Wrapper>
    </Section>
  );
};

export default Projects;
