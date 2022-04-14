import styled from "styled-components";

export default styled.section`
  //border: 0.5px solid;
  justify-content: center;
  .dice {
    object-position: top;
    z-index: 2;
    transform: rotate(20deg);
    position: relative;
    bottom: 50px;

    // float: left;
  }
  .pawn {
    position: absolute;
    z-index: 100;
    bottom: 16.5vh;
    right: 30vw;
  }
`;
