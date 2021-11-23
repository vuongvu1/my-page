import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { Text } from "atoms";
import { useScreen, useScroll } from "utils/hooks";
import { Option as OptionIcon, Close as CloseIcon } from "assets/icons";
import SC from "./styles";

const Links = ({ onClick }: { onClick?: () => void }) => {
  const { palette } = useTheme();

  return (
    <>
      <SC.Item onClick={onClick}>
        <Link to="/">
          <Text color={palette.primary.contrastText}>Home</Text>
        </Link>
      </SC.Item>
      <SC.Item onClick={onClick}>
        <a href="https://til.vuongvu.me/" target="_blank" rel="noreferrer">
          <Text color={palette.primary.contrastText}>Today I Learned</Text>
        </a>
      </SC.Item>
      <SC.Item onClick={onClick}>
        <Link to="/hobbies">
          <Text color={palette.primary.contrastText}>Hobbies</Text>
        </Link>
      </SC.Item>
      <SC.Item onClick={onClick}>
        <Link to="/playground">
          <Text color={palette.primary.contrastText}>Playground</Text>
        </Link>
      </SC.Item>
      <SC.Item onClick={onClick}>
        <Link to="/contact">
          <Text bold color={palette.primary.contrastText}>
            Contact
          </Text>
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
                onClick={() => setOpenHeader(true)}
              />
            </SC.Item>
          ) : (
            <Links />
          )}
        </SC.Items>
      </SC.Wrapper>
      {isOpenHeader && isScreenSmall && (
        <SC.MobileWrapper>
          <SC.CloseWrapper>
            <CloseIcon
              fill={palette.primary.contrastText}
              onClick={() => setOpenHeader(false)}
            />
          </SC.CloseWrapper>
          <Links onClick={() => setOpenHeader(false)} />
        </SC.MobileWrapper>
      )}
    </>
  );
};

export default Header;
