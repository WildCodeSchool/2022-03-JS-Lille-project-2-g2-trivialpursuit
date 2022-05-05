import SVictory from "./style";
import pawn from "../../assets/pictures/pawn.svg";
import banner from "../../assets/pictures/banner.png";

export default function victory() {
  return (
    <SVictory>
      <img src={banner} alt="Victory Banner" />
      <p>Congratulation you won in...</p>
      <img src={pawn} alt="Pawn" />
    </SVictory>
  );
}