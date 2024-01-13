import { useTheme } from "styled-components";
import { Section, Text, Card, Toasty } from "atoms";
import projects from "./projects";
import SC from "./styles";

const Projects = () => {
  const { palette } = useTheme();

  return (
    <Section id="projects-section">
      <SC.Wrapper>
        <Toasty>
          <Text type="h1" color={palette.primary.contrastText}>
            Some Projects
          </Text>
        </Toasty>
        <SC.Body>
          {projects.map((project, index) => (
            <Toasty key={project.title} delay={`${(index + 1) * 100}ms`}>
              <Card {...project}>{project.desc}</Card>
            </Toasty>
          ))}
        </SC.Body>
      </SC.Wrapper>
    </Section>
  );
};

export default Projects;
