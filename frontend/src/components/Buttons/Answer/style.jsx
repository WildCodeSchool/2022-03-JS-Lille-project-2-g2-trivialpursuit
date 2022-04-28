import styled from "styled-components";

export default styled.div`
  .answers {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 27vh;
  }
  .answer {
    border-radius: 5px;
    width: 40vh;
    height: 5vh;
    background-color: var(--white-color);
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  p:hover {
    font-weight: bold;
    color: #f4f7f6;
  }
  .answer:hover {
    background-color: var(--main-color);
  }

  .right.selected {
    background-color: green;
  }
  .wrong.selected {
    background-color: #802d00;
  }
  .none {
    background-color: #b8b5a9;
  }
`;
