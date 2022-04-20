import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SBurger from "./style";

export default function Burger({ burger }) {
  return (
    <SBurger isOpen={burger}>
      <div className="hamburger">
        <span className="burger burger1" to="/Rules" />
        <span className="burger burger2" to="/Rules" />
        <span className="burger burger3" to="/Rules" />
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/Rules">Rules</Link>
          </li>
          <li>
            <Link to="/Rules">Terms and conditions</Link>
          </li>
          <li>
            <Link to="/Rules">Team</Link>
          </li>
        </ul>
      </div>
    </SBurger>
  );
}
Burger.propTypes = {
  burger: PropTypes.bool,
};
Burger.defaultProps = {
  burger: false,
};
