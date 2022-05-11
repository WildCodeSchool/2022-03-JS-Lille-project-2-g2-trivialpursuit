import SRules from "./style";

export default function Rules() {
  const image = `./src/assets/pictures/rulesCard.svg`;
  return (
    <SRules>
      <h3 className="title">Rules</h3>
      <div>
        <div className="rules">
          <ul>
            <li>Roll the dice to get started,</li>
            <li>then choose the correct answer.</li>
            <li>You win the game when you correctly</li>
            <li>answer to one question of each category.</li>
          </ul>
          <p> Good Luck, Have Fun ! :)</p>
        </div>
        <img src={image} alt="categories-explaination" />
      </div>
    </SRules>
  );
}
