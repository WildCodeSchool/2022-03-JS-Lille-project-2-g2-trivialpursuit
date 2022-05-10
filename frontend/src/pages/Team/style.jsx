import styled from "styled-components";

export default styled.div`
  .team {
    border-radius: 10px;
    background-color: var(--white-opacity);
    font-family: var(--font-family);
    font-size: 0.65rem;
  }
  ul {
    height: 55vh;
    display: flex;
    justify-content: center;
  }
  .contact {
    color: var(--main-color);
  }
  .links {
    padding-top: 1vh;
    display: flex;
    justify-content: space-between;
  }
  .icon {
    aspect-ratio: 1/1;
  }
  .title {
    border-radius: 10px 10px 0 0;
    background-color: var(--main-color);
    color: var(--white-color);
    font-family: var(--font-family);
    font-size: 1.3rem;
    height: 7vh;
    display: flex;
    align-items: center;
    padding-left: 5vw;
  }
  @media screen and (max-width: 700px) {
    .team {
      width: 90vw;
    }
    h2 {
      width: 100%;
    }
    ul {
      flex-direction: column;
      padding-top: 1vh;
    }
    .contact {
      width: 90vw;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 1vh;
    }
    .links {
      width: 20vw;
    }
    .icon {
      width: 7vw;
    }
  }
  @media screen and (min-width: 700px) {
    .team {
      width: 60vw;
      font-size: 1.3rem;
    }
    ul {
      flex-wrap: wrap;
      padding-top: 5vh;
    }
    .contact {
      width: 25vw;
    }
    .links {
      width: 6vw;
    }
    .icon {
      width: 2.5vw;
    }
  }
`;
