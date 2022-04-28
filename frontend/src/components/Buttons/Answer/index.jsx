import PropTypes from "prop-types";
import { useState } from "react";
import Style from "./style";

export default function Answer({ data: { correctAnswer, incorrectAnswers } }) {
  const [answers] = useState(
    [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5)
  );
  const [clickable, setClickable] = useState(true);

  const hClickAnswer = (evt) => {
    if (!clickable) return;
    setClickable(false);
    evt.target.classList.add("selected");
  };

  return (
    <Style>
      <div className="answers">
        {answers.map((answer) => (
          <button
            type="button"
            onClick={hClickAnswer}
            className={`answer ${
              answer === correctAnswer ? "right" : "wrong"
            } `}
          >
            <p key={answer}>{answer}</p>
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
