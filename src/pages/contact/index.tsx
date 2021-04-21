import { useTheme } from "styled-components";
import { Section, Text, Link } from "atoms";
import contacts from "./contacts";
import SC from "./styles";

const Contact = () => {
  const { palette } = useTheme();
  return (
    <Section bgColor={palette.common.light}>
      <SC.Wrapper>
        <Text type="h2">
          Here's my{" "}
          <Link
            href="https://docs.google.com/document/d/109tsrH1jxUoQuvOzqbxtb7VrALkgYxdHRbAXVgXLzjs/edit?usp=sharing"
            target="_blank"
            color={palette.primary.main}
          >
            CV
          </Link>
          ,
          <br />
          Or you can find me at:
        </Text>
        <SC.Info>
          {contacts.map((contact) => (
            <Text key={contact.name} type="body">
              <Link
                href={contact.address}
                target="_blank"
                color={palette.primary.main}
              >
                {contact.name}
              </Link>
            </Text>
          ))}
        </SC.Info>
      </SC.Wrapper>
    </Section>
  );
};

export default Contact;
