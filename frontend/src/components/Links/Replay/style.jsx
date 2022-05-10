import styled from "styled-components";

export default styled.div`
  div {
    margin: auto;
    margin-top: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15vh;
    height: 15vh;
    text-align: center;
    background-image: url("../src/assets/pictures/play-button.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  a:link {
    text-decoration: none;
  }

  h3 {
    color: var(--white-color);
    font-size: 1.3em;
  }
  @media screen and (min-width: 700px) {
    div {
      width: 17vh;
      height: 17vh;
      &:hover {
        background-image: url("../src/assets/pictures/play-button-hover.svg");
        background-size: contain;
        width: 17vw;
        height: 17vh;
      }
    }
  }
`;
