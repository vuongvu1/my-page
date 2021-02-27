import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { Text } from "atoms";
import { useScreen, useScroll } from "utils/hooks";
import { Option as OptionIcon } from "assets/icons";
import SC from "./styles";

const Header = () => {
  const { palette } = useTheme();
  const { isSmall: isScreenSmall } = useScreen();
  const { scrollDirection } = useScroll();

  return (
    <SC.Wrapper hide={scrollDirection === "down"}>
      <SC.Items>
        {isScreenSmall ? (
          <SC.Item>
            <OptionIcon fill={palette.primary.contrastText} />
          </SC.Item>
        ) : (
          <>
            <SC.Item>
              <Link to="/">
                <Text color={palette.primary.contrastText}>Home</Text>
              </Link>
            </SC.Item>
            <SC.Item>
              <Link to="/about">
                <Text color={palette.primary.contrastText}>About</Text>
              </Link>
            </SC.Item>
            <SC.Item>
              <Link to="/playground">
                <Text color={palette.primary.contrastText}>Playground</Text>
              </Link>
            </SC.Item>
            <SC.Item>
              <Link to="/contact">
                <Text color={palette.primary.contrastText}>Contact</Text>
              </Link>
            </SC.Item>
          </>
        )}
      </SC.Items>
    </SC.Wrapper>
  );
};

export default Header;
