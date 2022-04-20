import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 8vh;
    aspect-ratio: 1/1;
    border: none;
    margin: 0px;
    background: url("../src/assets/pictures/dice5.svg") no-repeat;
    background-size: contain;
    border: none;
    cursor: pointer;
    outline: none;
  }
  button:hover {
    transform: rotate(30deg);
    aspect-ratio: 1/1;
  }
`;