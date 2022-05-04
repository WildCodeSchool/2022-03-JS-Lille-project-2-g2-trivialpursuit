import styled from "styled-components";

export default styled.div`
  @media screen and (max-width: 700px) {
  display: flex;
  justify-content: center;
  margin-top: 0;
}

  display: flex;
  justify-content: center;
  margin-top: 7vh;

  button {
    width: 8vh;
    aspect-ratio: 1/1;
    border: none;
    margin: 0px;
    background: ${(props) => {
      return `url(../src/assets/pictures/dice${props.dice}.svg) no-repeat`;
    }};
    background-size: contain;
    border: none;
    cursor: pointer;
    outline: none;
    display: inline-block;
    animation: wiggle 1.5s infinite;

  @keyframes wiggle {
    0% { transform: rotate(0deg); }
    80% { transform: rotate(0deg); }
    85% { transform: rotate(5deg); }
    95% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
  }


`;
