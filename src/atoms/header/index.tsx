import { Link } from "react-router-dom";
import SC from "./styles";

const Header = () => {
  return (
    <SC.Wrapper>
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
    </SC.Wrapper>
  );
};

export default Header;
