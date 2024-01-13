import { useTheme } from "styled-components";
import { Section, Text, ProgressSegment, Link, Toastify } from "atoms";
import SC from "./styles";

const timeline = [
  {
    title: "Dec 2021",
    description: (
      <>
        Joined{" "}
        <Link href="https://www.deliveryhero.com/" target="_blank">
          Delivery Hero
        </Link>{" "}
        as a Frontend Engineer and moved to Berlin, Germany.
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
        as a Frontend Engineer and moved to Singapore.
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
        as a Frontend Engineer.
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
        as a Fresher Software Engineer and completed KMS Next training program.
      </>
    ),
  },
  {
    title: "April 2017",
    description: (
      <>
        Graduated from{" "}
        <Link href="https://hcmut.edu.vn/en" target="_blank">
          HCM University of Technology
        </Link>{" "}
        with an Honor Bachelor's Degree, majoring in Computer Engineering.
      </>
    ),
  },
];

const Timeline = () => {
  const { palette } = useTheme();

  return (
    <Section id="timeline-section">
      <SC.Wrapper>
        <Toastify>
          <Text type="h1" color={palette.primary.contrastText}>
            Timeline
          </Text>
        </Toastify>
        <SC.Body>
          {timeline.map((event, index) => (
            <Toastify
              key={event.title}
              delay={`${(index + 1) * 100}ms`}
              style={{ width: "100%" }}
            >
              <ProgressSegment
                isLast={index === 0}
                isFirst={index === timeline.length - 1}
                index={timeline.length - index}
                title={event.title}
                description={event.description}
              />
            </Toastify>
          ))}
        </SC.Body>
      </SC.Wrapper>
    </Section>
  );
};

export default Timeline;
