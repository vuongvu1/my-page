import { useTheme } from "styled-components";
import { Section } from "atoms";
import SC from "./styles";

const Error = () => {
  const { palette } = useTheme();
  return (
    <Section bgColor={palette.common.light}>
      <SC.Wrapper>Page Not Found</SC.Wrapper>
    </Section>
  );
};

export default Error;
