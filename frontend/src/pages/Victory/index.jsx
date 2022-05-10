import Replay from "../../components/Links/Replay";
import SVictory from "./style";
import pawn from "../../assets/pictures/pawn.svg";
import banner from "../../assets/pictures/banner.png";

export default function victory() {
  return (
    <div>
      <SVictory>
        <img src={banner} alt="Victory Banner" />
        <img src={pawn} alt="Pawn" />
        <p>Congratulations you won in...</p>
      </SVictory>
      <div className="replay-container">
        <Replay />
      </div>
    </div>
  );
}
