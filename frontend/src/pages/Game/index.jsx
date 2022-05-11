import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import Style from "./style";
import Question from "../../components/Question/index";
import Dice from "../../components/Buttons/Dice/index";
import Answer from "../../components/Buttons/Answer/index";
import Pawn from "../../components/Pawn/index";
import context from "../../context/Ctx";

export default function Game() {
  const [play, setPlay] = useState({});
  const [stats, setStats] = useState({});
  const { counter, currentCategory, categories, setClickable } =
    useContext(context);
  const parseEntities = (txt) =>
    new DOMParser().parseFromString(txt, "text/html").body.innerText;
  const getPlay = () => {
    if (!stats.difficulty) return;
    axios
      .get(
        `https://opentdb.com/api.php?amount=1&category=${currentCategory.number}&difficulty=${stats.difficulty}`
      )
      .then(({ data }) => {
        const rawData = data.results[0];
        const { category, type, difficulty, question } = rawData;
        setPlay({
          category,
          type,
          difficulty,
          question: parseEntities(question),
          correctAnswer: parseEntities(rawData.correct_answer),
          incorrectAnswers: rawData.incorrect_answers.map((ans) =>
            parseEntities(ans)
          ),
        });
      });
  };
  useEffect(getPlay, [counter]);
  useEffect(() => {
    setClickable(false);
  }, []);
  return (
    <Style>
      {!categories.length && <Navigate to="/victory" />}
      <section>
        <Question
          data={play}
          categoryName={currentCategory.name}
          categoryColor={currentCategory.color}
        />
        <div className="dice">
          <Dice setStats={setStats} />
        </div>
        {play.incorrectAnswers && <Answer data={play} />}
        <Pawn className="pawn" />
      </section>
    </Style>
  );
}
