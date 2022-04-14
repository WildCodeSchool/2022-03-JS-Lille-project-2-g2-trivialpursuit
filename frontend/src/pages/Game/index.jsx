import Style from "./style";
import Question from "../../components/Question/index";
import Dice from "../../components/Buttons/Dice/index";
import Answer from "../../components/Buttons/Answer/index";
import Pawn from "../../components/Pawn/index";

export default function Game() {
  return (
    <Style>
      <section>
        <Question />
        <div className="dice">
          <Dice />
        </div>
        <Answer />
        <Pawn className="pawn" />
      </section>
    </Style>
  );
}
