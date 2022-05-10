import { Link } from "react-router-dom";
import Style from "./style";

export default function Replay() {
  return (
    <Style>
      <Link to="/game">
        <div>
          <h3>REPLAY</h3>
        </div>
      </Link>
    </Style>
  );
}
