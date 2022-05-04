import { useContext } from "react";
import context from "../../context/Ctx";
import Style from "./style";

export default function Pawn() {
  const { categories, currentCategory } = useContext(context);
  const totalColors = ["green", "blue", "yellow", "pink", "orange", "purple"];
  return (
    <Style>
      <section className="pawn">
        {totalColors.map((color) => (
          <div
            key={color}
            className={
              categories.findIndex((e) => e.color === color) === -1
                ? `sameClass ${color}`
                : ""
            }
          />
        ))}
        {currentCategory.color !== undefined && (
          <div className="sameClass empty" />
        )}
      </section>
    </Style>
  );
}
