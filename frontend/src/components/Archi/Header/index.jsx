import { Link } from "react-router-dom";
import SHeader from "./style";
import Logo from "../../../assets/pictures/Logo_transparent.png";
import Rules from "../../Links/Rules";

export default function Header() {
  return (
    <SHeader>
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <Rules />
    </SHeader>
  );
}
