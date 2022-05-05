import PropTypes from "prop-types";
import Style from "./style";

export default function Question({
  data: { question },
  categoryName,
  categoryColor,
}) {
  const image = `./src/assets/pictures/arrow-${categoryColor}.svg`;
  return (
    <Style>
      <section>
        <div className={categoryName} id="category">
          <img className={categoryColor} src={image} alt="color-category" />
          <h4>
            {categoryName !== "" ? `Question : ${categoryName}` : "Welcome !"}
          </h4>
        </div>
        <div className="question">
          <h6>
            {categoryName !== ""
              ? `${question}`
              : "Roll the dice to start the game !"}
          </h6>
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
  categoryColor: PropTypes.string,
  categoryName: PropTypes.string,
};
Question.defaultProps = {
  data: PropTypes.shape({
    question: "",
    category: "",
  }),
  categoryColor: "",
  categoryName: "",
};
