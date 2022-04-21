import PropTypes from "prop-types";
import Style from "./style";

export default function Answer({ data: { correctAnswer } }) {
  return (
    <Style>
      <div className="answers">
        <div className="answer">
          <p>{correctAnswer}</p>
        </div>
        <div className="answer">
          <p>En Grande Bretagne</p>
        </div>
        <div className="answer">
          <p>En Suisse</p>
        </div>
        <div className="answer">
          <p>En Chine</p>
        </div>
      </div>
    </Style>
  );
}

Answer.propTypes = {
  data: PropTypes.shape({
    correctAnswer: PropTypes.string,
  }),
};
Answer.defaultProps = {
  data: PropTypes.shape({
    correctAnswer: "",
  }),
};
