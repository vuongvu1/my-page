import { useTheme } from "styled-components";
import { Section, Text, Card } from "atoms";
import projects from "./projects";
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
          {projects.map((project) => (
            <Card key={project.title} {...project}>
              {project.desc}
            </Card>
          ))}
        </SC.Body>
      </SC.Wrapper>
    </Section>
  );
};

export default Projects;
