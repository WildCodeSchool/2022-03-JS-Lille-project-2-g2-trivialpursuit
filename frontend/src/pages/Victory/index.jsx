import { useContext } from "react";
import SVictory from "./style";
import pawn from "../../assets/pictures/pawn.svg";
import banner from "../../assets/pictures/banner.png";
import context from "../../context/Ctx";

export default function victory() {
  const { timer, setIsTimerActive } = useContext(context);
  const secondToTime = () => {
    const min = Math.floor(timer / 60);
    const timeForSec = timer % 60;
    const sec = Math.ceil(timeForSec);
    return `${min}:${sec}`;
  };
  setIsTimerActive(false);
  return (
    <SVictory>
      <img src={banner} alt="Victory Banner" />
      <p>Congratulation you won in {secondToTime(timer)}</p>
      <img src={pawn} alt="Pawn" />
    </SVictory>
  );
}
