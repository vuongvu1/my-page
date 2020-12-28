import { Link } from "react-router-dom";
import { useScreen } from "utils/hooks";
import { Option as OptionIcon } from "icons";
import SC from "./styles";

const Header = () => {
  const { isSmall } = useScreen();

  return (
    <SC.Wrapper>
      {isSmall && <OptionIcon fill="#FFFFFF" />}
      {!isSmall && (
        <SC.Items>
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
        </SC.Items>
      )}
    </SC.Wrapper>
  );
};

export default Header;
