import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import SHeader from "./style";
import Logo from "../../../assets/pictures/Logo_transparent.png";
import Rules from "../../Links/Rules";
import Burger from "../Burger";
import context from "../../../context/Ctx";

export default function Header() {
  const { reset } = useContext(context);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <SHeader>
      <Link to="/" onClick={reset}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <Burger burger={burgerOpen} func={toggleBurger} />
      <Rules />
    </SHeader>
  );
}
