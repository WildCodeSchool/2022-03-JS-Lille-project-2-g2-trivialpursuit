import { createContext, useState } from "react";
import PropTypes from "prop-types";

const context = createContext(null);

export default context;

export function CtxProvider({ children }) {
  const [categories, setCategories] = useState([
    { number: "22", name: "geography", color: "blue" },
    { number: "14", name: "television", color: "pink" },
    { number: "23", name: "history", color: "yellow" },
    { number: "10", name: "books", color: "purple" },
    { number: "17", name: "science & nature", color: "green" },
    { number: "22", name: "sports", color: "orange" },
  ]);
  const [currentCategory, setCurrentCategory] = useState({});
  const winCateg = () => {
    setCategories(
      categories.filter((categ) => {
        return categ.color !== currentCategory.color;
      })
    );
  };

  return (
    <context.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        categories,
        winCateg,
        currentCategory,
        setCurrentCategory,
      }}
    >
      {children}
    </context.Provider>
  );
}
CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
