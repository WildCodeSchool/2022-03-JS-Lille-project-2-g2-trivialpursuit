import { Link } from "react-router-dom";
import STeam from "./style";
import team from "../../../assets/pictures/team.svg";

function Team() {
  return (
    <STeam>
      <Link to="/team">
        <p>Team</p>
        <img src={team} alt="Team" />
      </Link>
    </STeam>
  );
}

export default Team;
