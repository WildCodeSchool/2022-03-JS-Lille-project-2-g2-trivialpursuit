import styled from "styled-components";

export default styled.div`
  .answers {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 27vh;
  }

  .smileyWrong,
  .smileyRight {
    display: none;
    position: absolute;
    left: 93%;
  }

  .answer {
    border-radius: 10px;
    width: 40vh;
    height: 5vh;
    background-color: var(--white-color);
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-family: var(--font-family);

    &:hover {
      font-weight: bold;
      color: var(--white-color);
      background-color: var(--main-color);
    }
  }

  @media screen and (min-width: 700px) {
    .answer {
      font-size: 1rem;
      line-height: 1rem;
    }
    .answers {
      justify-content: flex-start;
    }
  }
  .right.selected {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      var(--right-answer);
    background-color: var(--right-answer-background);
    color: var(--white-color);
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 3px solid var(--right-answer-border);
    .smileyRight {
      display: block;
    }
  }

  .right {
    background: ${(props) =>
      props.finished &&
      " linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), var(--right-answer); "};

    box-shadow: ${(props) =>
      props.finished && "0px 4px 4px rgba(0, 0, 0, 0.25);"};
    border: ${(props) =>
      props.finished && "3px solid var(--right-answer-border);"};
    color: ${(props) => props.finished && "var(--white-color);"};
    .smileyRight {
      display: ${(props) => props.finished && "block"};
    }
  }
  .wrong.selected {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      var(--wrong-answer);
    background-color: var(--wrong-answer-background);
    color: var(--white-color);
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 3px solid var(--wrong-answer-border);
    .smileyWrong {
      display: block;
    }
  }

  .wrong {
    opacity: ${(props) => props.finished && "0.6"};
  }
`;
