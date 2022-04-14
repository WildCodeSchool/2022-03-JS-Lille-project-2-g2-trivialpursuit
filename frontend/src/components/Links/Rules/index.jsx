import { Link } from "react-router-dom";
import Regles from "../../../assets/pictures/rules.svg";
import SRules from "./style";

function Rules() {
  return (
    <SRules>
      <Link className="rules" to="/Rules">
        <img src={Regles} alt="Règles" />
        <p>Rules</p>
      </Link>
    </SRules>
  );
}
export default Rules;
