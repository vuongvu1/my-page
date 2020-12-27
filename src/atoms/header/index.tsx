import { Link } from "react-router-dom";
import SC from "./styles";

const Header = () => {
  return (
    <SC.Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </SC.Nav>
  );
};

export default Header;
