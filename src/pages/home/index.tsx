import { Section } from "components";
import { useTheme } from "styled-components";
import SC from "./styles";

const Home = () => {
  const theme = useTheme();

  return (
    <Section bgColor={theme.palette.primary.main}>
      <SC.Wrapper>hello hello home</SC.Wrapper>
    </Section>
  );
};

export default Home;
