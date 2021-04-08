import { useTheme } from "styled-components";
import { Section, Text, ProgressSegment, Link } from "atoms";
import SC from "./styles";

const timeline = [
  {
    title: "Mar 2021",
    description: (
      <>
        Created{" "}
        <Link href="https://til.vuongvu.me/" target="_blank">
          Today I Learned
        </Link>{" "}
        website, start documenting what I have learned.
      </>
    ),
  },
  {
    title: "Mar 2020",
    description: (
      <>
        Joined{" "}
        <Link href="https://www.2359.co/" target="_blank">
          2359 Media
        </Link>{" "}
        as a frontend developer, moving to Singapore.
      </>
    ),
  },
  {
    title: "July 2018",
    description: (
      <>
        Joined{" "}
        <Link href="https://www.codelink.io/" target="_blank">
          CodeLink
        </Link>{" "}
        as a frontend developer.
      </>
    ),
  },
  {
    title: "March 2017",
    description: (
      <>
        Joined{" "}
        <Link href="https://www.kms-technology.com/" target="_blank">
          KMS Technology
        </Link>{" "}
        as a fresher developer, completed KMS Next (fresher training program).
      </>
    ),
  },
  {
    title: "April 2017",
    description: (
      <>
        Graduated from{" "}
        <Link href="https://www.hcmut.edu.vn/en" target="_blank">
          HCM University of Technology
        </Link>{" "}
        with a Bachelor's Degree (Honor program), major in Computer Engineering.
      </>
    ),
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
