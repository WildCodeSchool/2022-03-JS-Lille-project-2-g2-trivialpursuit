import { Link } from "react-router-dom";
import Style from "./style";

export default function Play() {
  return (
    <Style>
      <Link to="/game">
        <div>
          <h3>PLAY</h3>
        </div>
      </Link>
    </Style>
  );
}
