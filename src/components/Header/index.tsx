import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { Text } from "atoms";
import { useScreen, useScroll } from "utils/hooks";
import { Option as OptionIcon } from "assets/icons";
import SC from "./styles";

const Links = () => {
  const { palette } = useTheme();

  return (
    <>
      <SC.Item>
        <Link to="/">
          <Text color={palette.primary.contrastText}>Home</Text>
        </Link>
      </SC.Item>
      <SC.Item>
        <a href="https://til.vuongvu.me/">
          <Text color={palette.primary.contrastText}>Today I Learned</Text>
        </a>
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
  );
};

const Header = () => {
  const [isOpenHeader, setOpenHeader] = useState(false);
  const { palette } = useTheme();
  const { isSmall: isScreenSmall } = useScreen();
  const { scrollDirection } = useScroll();

  return (
    <>
      <SC.Wrapper hide={scrollDirection === "down"}>
        <SC.Items>
          {isScreenSmall ? (
            <SC.Item>
              <OptionIcon
                fill={palette.primary.contrastText}
                onClick={() => setOpenHeader(!isOpenHeader)}
              />
            </SC.Item>
          ) : (
            <Links />
          )}
        </SC.Items>
      </SC.Wrapper>
      {isOpenHeader && isScreenSmall && (
        <SC.MobileWrapper>
          <Links />
        </SC.MobileWrapper>
      )}
    </>
  );
};

export default Header;
