import { useTheme } from "styled-components";
import { Section, Text, Card, Toastify } from "atoms";
import projects from "./projects";
import SC from "./styles";

const Projects = () => {
  const { palette } = useTheme();

  return (
    <Section id="projects-section">
      <SC.Wrapper>
        <Toastify>
          <Text type="h1" color={palette.primary.contrastText}>
            Some Projects
          </Text>
        </Toastify>
        <SC.Body>
          {projects.map((project, index) => (
            <Toastify key={project.title} delay={`${(index + 1) * 100}ms`}>
              <Card {...project}>{project.desc}</Card>
            </Toastify>
          ))}
        </SC.Body>
      </SC.Wrapper>
    </Section>
  );
};

export default Projects;
