import styled from "styled-components";

export default styled.section`
  .question {
  }
  .dice {
    transform: rotate(20deg);
    position: relative;
    bottom: 50px;
  }
  .answer {
    margin-top: 1vh;
    position: relative;
    bottom: 35px;
  }
  .pawn {
    margin: auto;
    width: 25vw;
    position: relative;
    bottom: 30px;
  }

  @media screen and (min-width: 700px) {
    justify-content: center;
    .dice {
      object-position: top;
      bottom: 75px;
    }
    .pawn {
      position: absolute;
      z-index: 100;
      bottom: 16.5vh;
      right: 30vw;
      width: 9vw;
    }
  }
`;
