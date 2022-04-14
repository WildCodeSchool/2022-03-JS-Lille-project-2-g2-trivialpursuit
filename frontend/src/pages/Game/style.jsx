import styled from "styled-components";

export default styled.section`
  justify-content: center;
  .dice {
    object-position: top;
    z-index: 2;
    transform: rotate(20deg);
    position: relative;
    bottom: 50px;
  }
  .pawn {
    position: absolute;
    z-index: 100;
    bottom: 16.5vh;
    right: 30vw;
  }
`;
