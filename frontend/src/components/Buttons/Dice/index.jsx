import PropTypes from "prop-types";

import Style from "./style";

export default function Dice({ onClick }) {
  return (
    <Style>
      <button name="dice" onClick={onClick} type="button" label="Dice" />
    </Style>
  );
}

Dice.propTypes = {
  onClick: PropTypes.func,
};
Dice.defaultProps = {
  onClick: () => {},
};
