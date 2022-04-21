import axios from "axios";
import { useState, useEffect } from "react";
import Style from "./style";
import Question from "../../components/Question/index";
import Dice from "../../components/Buttons/Dice/index";
import Answer from "../../components/Buttons/Answer/index";
import Pawn from "../../components/Pawn/index";

export default function Game() {
  const [play, setPlay] = useState([]);
  const getPLay = () => {
    axios
      .get("https://opentdb.com/api.php?amount=1")

      .then(({ data }) => {
        const rawData = data.results[0];
        const { category, type, difficulty, question } = rawData;
        setPlay({
          category,
          type,
          difficulty,
          question,
          correctAnswer: rawData.correct_answer,
          incorrectAnswer: rawData.incorrect_answer,
        });
      });
  };
  useEffect(getPLay, []);

  return (
    <Style>
      <section>
        <Question data={play} />
        <div className="dice">
          <Dice onClick={getPLay} value={play} />
        </div>
        <Answer className="answer" />
        <Answer data={play} />
        <Pawn className="pawn" />
      </section>
    </Style>
  );
}
