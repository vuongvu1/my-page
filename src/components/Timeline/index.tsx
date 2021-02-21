import { useTheme } from "styled-components";
import { Section, Text, ProgressSegment } from "atoms";
import SC from "./styles";

const timeline = [
  {
    title: "2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor velit, vitae commodo ex malesuada et.",
  },
  {
    title: "2019",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat tortor velit, vitae commodo ex malesuada et.",
  },
  {
    title: "2017",
    description:
      "Lorem ipsum dolor sit amet, Curabitur feugiat tortor velit, vitae commodo ex malesuada et.",
  },
];

const Timeline = () => {
  const { palette } = useTheme();

  return (
    <Section id="timeline-section">
      <SC.Wrapper>
        <Text type="h1" color={palette.primary.contrastText}>
          Timeline
        </Text>
        <SC.Body>
          {timeline.map((event, index) => (
            <ProgressSegment
              key={event.title}
              isLast={index === 0}
              isFirst={index === timeline.length - 1}
              index={timeline.length - index}
              title={event.title}
              description={event.description}
            />
          ))}
        </SC.Body>
      </SC.Wrapper>
    </Section>
  );
};

export default Timeline;
