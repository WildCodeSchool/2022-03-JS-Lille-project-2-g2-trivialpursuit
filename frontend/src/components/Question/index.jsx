import PropTypes from "prop-types";
import Style from "./style";

export default function Question({ data: { question, category } }) {
  return (
    <Style>
      <section>
        <div className={category} id="category">
          <h4>Question :</h4>
        </div>
        <div className="question">
          <h6>{question}</h6>
        </div>
      </section>
    </Style>
  );
}

Question.propTypes = {
  data: PropTypes.shape({
    question: PropTypes.string,
    category: PropTypes.string,
  }),
};
Question.defaultProps = {
  data: PropTypes.shape({
    question: "",
    category: "",
  }),
};
