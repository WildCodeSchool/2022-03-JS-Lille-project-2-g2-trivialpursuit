import { useContext } from "react";
import PropTypes from "prop-types";
import context from "../../context/Ctx";
import Style from "./style";

export default function Question({ data: { question } }) {
  const { currentCategory } = useContext(context);
  const image = `./src/assets/pictures/arrow-${currentCategory.color}.svg`;
  return (
    <Style>
      <section>
        <div className={currentCategory.name} id="category">
          {currentCategory.color !== undefined && (
            <img
              className={currentCategory.color}
              src={image}
              alt="color-category"
            />
          )}
          <h4>
            {currentCategory.name !== undefined
              ? `Question : ${currentCategory.name}`
              : "Welcome !"}
          </h4>
        </div>
        <div className="question">
          <h6>
            {currentCategory.name !== undefined
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
};
Question.defaultProps = {
  data: PropTypes.shape({
    question: "",
    category: "",
  }),
};
