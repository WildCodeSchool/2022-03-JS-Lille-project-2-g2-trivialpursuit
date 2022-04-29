import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
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
    animation: shake 0.5s;
    animation-iteration-count: 5s;

    @keyframes shake {
      0% {
        transform: translate(1px, 1px) rotate(0deg);
      }
      10% {
        transform: translate(-1px, -2px) rotate(-1deg);
      }
      20% {
        transform: translate(-3px, 0px) rotate(1deg);
      }
      30% {
        transform: translate(3px, 2px) rotate(0deg);
      }
      40% {
        transform: translate(1px, -1px) rotate(1deg);
      }
      50% {
        transform: translate(-1px, 2px) rotate(-1deg);
      }
      60% {
        transform: translate(-3px, 1px) rotate(0deg);
      }
      70% {
        transform: translate(3px, 1px) rotate(-1deg);
      }
      80% {
        transform: translate(-1px, -1px) rotate(1deg);
      }
      90% {
        transform: translate(1px, 2px) rotate(0deg);
      }
      100% {
        transform: translate(1px, -2px) rotate(-1deg);
      }
    }
  }
  button:hover {
    transform: rotate(30deg);
    aspect-ratio: 1/1;
  }
`;
