import styled from "styled-components";

export default styled.section`
  .dice {
    transform: rotate(20deg);
    position: relative;
    bottom: 40px;
  }
  .answer {
    margin-top: 1vh;
    position: relative;
    bottom: 35px;
  }
  .pawn {
    margin: auto;
    width: 22vw;
    position: relative;
    bottom: 35px;
  }

  @media screen and (min-width: 700px) {
    justify-content: center;
    .dice {
      object-position: top;
      bottom: 75px;
    }
    .pawn {
      position: absolute;
      bottom: 16.5vh;
      right: 30vw;
      width: 9vw;
    }
  }
`;
