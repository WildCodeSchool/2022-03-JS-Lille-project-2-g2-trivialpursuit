import PropTypes from "prop-types";
import { useState } from "react";
import Style from "./style";

export default function Answer({ data: { correctAnswer, incorrectAnswers } }) {
  const [answers] = useState(
    [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5)
  );

  return (
    <Style>
      <div className="answers">
        {answers.map((answer) => (
          <div className="answer">
            <p key={answer}>{answer}</p>
          </div>
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
