
import { useState } from "react";
import { Link } from "react-router-dom";
import SHeader from "./style";
import Logo from "../../../assets/pictures/Logo_transparent.png";
import Rules from "../../Links/Rules";
import Burger from "../Burger";

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <SHeader>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <Burger burger={burgerOpen} func={toggleBurger} />
        <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <Rules />
    </SHeader>
  );
}
