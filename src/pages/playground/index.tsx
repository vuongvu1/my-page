import { useTheme } from "styled-components";
import { Section } from "atoms";
import DigitalClock from "./components/DigitalClock";

const Playground = () => {
  const { palette } = useTheme();
  return (
    <Section bgColor={palette.common.light}>
      <DigitalClock />
    </Section>
  );
};

export default Playground;
