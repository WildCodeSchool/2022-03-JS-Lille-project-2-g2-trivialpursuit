import { createContext, useState } from "react";
import PropTypes from "prop-types";
import useInterval from "../services/hooks/useInterval";

const context = createContext(null);

export default context;

export function CtxProvider({ children }) {
  const [timer, setTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  useInterval(() => {
    if (isTimerActive) setTimer((prevState) => prevState + 1);
  }, 1000);

  const [categories, setCategories] = useState([
    { number: "22", name: "Geography", color: "blue" },
    { number: "14", name: "Television", color: "pink" },
    { number: "23", name: "History", color: "yellow" },
    { number: "10", name: "Literature", color: "purple" },
    { number: "17", name: "Science & Nature", color: "green" },
    { number: "21", name: "Sports", color: "orange" },
  ]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [clickable, setClickable] = useState(false);

  const winCateg = () => {
    setCategories(
      categories.filter((categ) => {
        return categ.color !== currentCategory.color;
      })
    );
  };

  const reset = () => {
    setCategories([
      { number: "22", name: "Geography", color: "blue" },
      { number: "14", name: "Television", color: "pink" },
      { number: "23", name: "History", color: "yellow" },
      { number: "10", name: "Literature", color: "purple" },
      { number: "17", name: "Science & Nature", color: "green" },
      { number: "21", name: "Sports", color: "orange" },
    ]);
    setClickable(false);
    setTimer(0);
    setCurrentCategory({});
  };

  return (
    <context.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        categories,
        winCateg,
        currentCategory,
        setCurrentCategory,
        clickable,
        setClickable,
        timer,
        setTimer,
        isTimerActive,
        setIsTimerActive,
        reset,
      }}
    >
      {children}
    </context.Provider>
  );
}
CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
