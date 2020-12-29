import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { useScreen } from "utils/hooks";
import { Option as OptionIcon } from "assets/icons";
import SC from "./styles";

const Header = () => {
  const theme = useTheme();
  const { isSmall: isScreenSmall } = useScreen();

  return (
    <SC.Wrapper>
      <SC.Items>
        {isScreenSmall ? (
          <SC.Item>
            <OptionIcon fill={theme.palette.primary.contrastText} />
          </SC.Item>
        ) : (
          <>
            <SC.Item>
              <Link to="/">Home</Link>
            </SC.Item>
            <SC.Item>
              <Link to="/about">About</Link>
            </SC.Item>
            <SC.Item>
              <Link to="/projects">Projects</Link>
            </SC.Item>
            <SC.Item>
              <Link to="/contact">Contact</Link>
            </SC.Item>
          </>
        )}
      </SC.Items>
    </SC.Wrapper>
  );
};

export default Header;
