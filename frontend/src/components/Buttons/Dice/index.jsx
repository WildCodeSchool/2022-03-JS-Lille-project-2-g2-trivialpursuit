import PropTypes from "prop-types";
import { useState } from "react";
import Style from "./style";

export default function Dice({ setStats }) {
  const [dice, setDice] = useState(1);
  const categories = [
    { number: "22", name: "geography", color: "blue" },
    { number: "14", name: "television", color: "pink" },
    { number: "23", name: "history", color: "yellow" },
    { number: "10", name: "books", color: "purple" },
    { number: "17", name: "science & nature", color: "green" },
    { number: "22", name: "sports", color: "orange" },
  ];

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
    const categ = categories[getRandomInt(6)];
    setStats({ difficulty, categ });
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
