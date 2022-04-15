import styled from "styled-components";

export default styled.body`
  --main-color: #13293e;
  --back-color: #91c0b2;
  --white-color: #e8f0ed;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--back-color);
  width: 100vw;
  height: 100vh;
  background-image: url("../src/assets/pictures/background-image.svg");
  background-size: 100%;
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--main-color);
  }
  p {
    font-size: 1em;
  }
  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.8em;
  }
  h4 {
    font-size: 1.6em;
  }
  h5 {
    font-size: 1.5em;
  }
  h6 {
    font-size: 1.2em;
  }
`;
