import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Style from "./style";
import right from "../../../assets/pictures/right.svg";
import wrong from "../../../assets/pictures/wrong.svg";

export default function Answer({ data: { correctAnswer, incorrectAnswers } }) {
  const [answers, setAnswers] = useState(
    [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5)
  );
  const [clickable, setClickable] = useState(true);
  const [finished, setFinished] = useState(false);
  const hClickAnswer = (evt) => {
    if (!clickable) return;
    setClickable(false);
    setFinished(true);
    evt.target.classList.add("selected");
  };

  useEffect(() => {
    setAnswers(
      [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5)
    );
    setClickable(true);
    setFinished(false);
  }, [correctAnswer]);

  return (
    <Style finished={finished}>
      <div className="answers">
        {answers.map((answer) => (
          <button
            type="button"
            onClick={hClickAnswer}
            className={`answer ${answer === correctAnswer ? "right" : "wrong"} 
            `}
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
