import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { Text } from "atoms";
import { useScreen, useScroll } from "utils/hooks";
import { Option as OptionIcon } from "assets/icons";
import SC from "./styles";

const Header = () => {
  const theme = useTheme();
  const { isSmall: isScreenSmall } = useScreen();
  const { scrollDirection } = useScroll();

  return (
    <SC.Wrapper hide={scrollDirection === "down"}>
      <SC.Items>
        {isScreenSmall ? (
          <SC.Item>
            <OptionIcon fill={theme.palette.primary.contrastText} />
          </SC.Item>
        ) : (
          <>
            <SC.Item>
              <Link to="/">
                <Text>Home</Text>
              </Link>
            </SC.Item>
            <SC.Item>
              <Link to="/about">
                <Text>About</Text>
              </Link>
            </SC.Item>
            <SC.Item>
              <Link to="/projects">
                <Text>Projects</Text>
              </Link>
            </SC.Item>
            <SC.Item>
              <Link to="/contact">
                <Text>Contact</Text>
              </Link>
            </SC.Item>
          </>
        )}
      </SC.Items>
    </SC.Wrapper>
  );
};

export default Header;
