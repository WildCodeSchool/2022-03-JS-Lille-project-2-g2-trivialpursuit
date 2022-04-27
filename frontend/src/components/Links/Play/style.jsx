import styled from "styled-components";

export default styled.div`
  div {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40vh;
    height: 40vh;
    text-align: center;
    background-image: url("../src/assets/pictures/play-button.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  div:hover {
    background-image: url("../src/assets/pictures/play-button-hover.svg");
    background-size: contain;
    width: 40vh;
    height: 40vh;
  }

  a:link {
    text-decoration: none;
  }

  h3 {
    color: var(--white-color);
    font-size: 3.5em;
  }
  h3:hover {
    color: #345a7d;
  }
`;
