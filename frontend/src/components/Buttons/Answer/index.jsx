import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import Style from "./style";
import right from "../../../assets/pictures/right.svg";
import wrong from "../../../assets/pictures/wrong.svg";
import context from "../../../context/Ctx";

export default function Answer({ data: { correctAnswer, incorrectAnswers } }) {
  const [answers, setAnswers] = useState(
    [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5)
  );
  const { winCateg, clickable, setClickable } = useContext(context);
  const hClickAnswer = (evt) => {
    if (!clickable) return;
    setClickable(false);
    if (evt.target.value === correctAnswer) {
      winCateg();
    }
    evt.target.classList.add("selected");
  };

  useEffect(() => {
    setAnswers(
      [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5)
    );
    setClickable(true);
  }, [correctAnswer]);

  return (
    <Style finished={!clickable}>
      <div className="answers">
        {answers.map((answer) => (
          <button
            type="button"
            onClick={hClickAnswer}
            className={`answer ${answer === correctAnswer ? "right" : "wrong"} 
            `}
            value={answer}
            key={answer}
          >
            {answer}
            <img src={right} className="smileyRight" alt="Right" />
            <img src={wrong} className="smileyWrong" alt="Wrong" />
          </button>
        ))}
      </div>
    </Style>
  );
}
Answer.propTypes = {
  data: PropTypes.shape({
    correctAnswer: PropTypes.string,
    incorrectAnswers: PropTypes.arrayOf(PropTypes.string),
  }),
};
Answer.defaultProps = {
  data: PropTypes.shape({
    correctAnswer: "",
    incorrectAnswers: [],
  }),
};
