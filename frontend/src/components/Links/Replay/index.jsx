import { useContext } from "react";
import { Link } from "react-router-dom";
import context from "../../../context/Ctx";
import Style from "./style";

export default function Replay() {
  const { reset } = useContext(context);
  return (
    <Style>
      <Link to="/game" onClick={reset}>
        <div>
          <h3>REPLAY</h3>
        </div>
      </Link>
    </Style>
  );
}
