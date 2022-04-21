import PropTypes from "prop-types";
import Style from "./style";

export default function Answer({ data: { correctAnswer, incorrectAnswers } }) {
  const answers = [];
  function arrayOfAnswers() {
    for (let i = 0; i < incorrectAnswers.length; i += 1) {
      answers.push(incorrectAnswers[i]);
    }
    answers.push(correctAnswer);
    return answers.sort(() => Math.random() - 0.5);
  }
  arrayOfAnswers(answers);

  return (
    <Style>
      <div className="answers">
        {answers.map((answer) => (
          <div className="answer">
            <p>{answer}</p>
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
