import styled from "styled-components";

export default styled.div`
  position: absolute;
  right: 0;
  img {
    height: 8vh;
    width: 15vw;
  }
  .rules {
    display: none;
  }
  @media screen and (min-width: 700px) {
    .rules {
      height: 10vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: var(--main-color);
      font-weight: bolder;
      font-family: var(--font-family);
      font-size: larger;
    }
  }
`;
