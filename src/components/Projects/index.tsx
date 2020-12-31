import { useTheme } from "styled-components";
import { Section, Text } from "atoms";
import SC from "./styles";

const Projects = () => {
  const { palette } = useTheme();

  return (
    <Section>
      <SC.Wrapper>
        <Text type="h1" color={palette.primary.contrastText}>
          Projects
        </Text>
        <SC.Body>
          <div
            style={{ height: 300, width: "100%", border: "1px solid red" }}
          ></div>
          <div
            style={{ height: 300, width: "100%", border: "1px solid red" }}
          ></div>
          <div
            style={{ height: 300, width: "100%", border: "1px solid red" }}
          ></div>
          <div
            style={{ height: 300, width: "100%", border: "1px solid red" }}
          ></div>
          <div
            style={{ height: 300, width: "100%", border: "1px solid red" }}
          ></div>
        </SC.Body>
      </SC.Wrapper>
    </Section>
  );
};

export default Projects;
