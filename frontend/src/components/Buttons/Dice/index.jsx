import PropTypes from "prop-types";
import { useState, useContext } from "react";
import Style from "./style";
import context from "../../../context/Ctx";

export default function Dice({ setStats }) {
  const [dice, setDice] = useState(1);
  const { categories, setCurrentCategory } = useContext(context);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const throwDice = () => {
    let difficulty = "easy";
    const diceValue = getRandomInt(6) + 1;
    setDice(diceValue);
    if (diceValue === 2 || diceValue === 1) {
      difficulty = "easy";
    } else if (diceValue === 4 || diceValue === 3) {
      difficulty = "medium";
    } else {
      difficulty = "hard";
    }
    setCurrentCategory(categories[getRandomInt(categories.length)]);
    setStats({ difficulty });
  };

  return (
    <Style dice={dice}>
      <button
        className="diff"
        name="dice"
        onClick={throwDice}
        type="button"
        label="Dice"
      />
    </Style>
  );
}
Dice.propTypes = {
  setStats: PropTypes.func,
};
Dice.defaultProps = {
  setStats: () => {},
};
