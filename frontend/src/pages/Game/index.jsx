import axios from "axios";
import { useState, useEffect } from "react";
import Style from "./style";
import Question from "../../components/Question/index";
import Dice from "../../components/Buttons/Dice/index";
import Answer from "../../components/Buttons/Answer/index";
import Pawn from "../../components/Pawn/index";

export default function Game() {
  const [play, setPlay] = useState({});
  const [stats, setStats] = useState({});

  const getPlay = () => {
    if (!stats.categ) return;
    axios
      .get(
        `https://opentdb.com/api.php?amount=1&category=${stats.categ.number}&difficulty=${stats.difficulty}`
      )
      .then(({ data }) => {
        const rawData = data.results[0];
        const { category, type, difficulty, question } = rawData;
        setPlay({
          category,
          type,
          difficulty,
          question,
          correctAnswer: rawData.correct_answer,
          incorrectAnswers: rawData.incorrect_answers,
        });
      });
    });
  };
  useEffect(getPlay, [stats]);
  return (
    <Style>
      <section>
        <Question data={play} />
        <div className="dice">
          <Dice setStats={setStats} />
        </div>
        {play.incorrectAnswers && <Answer data={play} />}
        <Pawn className="pawn" />
      </section>
    </Style>
  );
}
