import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    border-radius: 20px 20px 20px 20px;
    border: 3px var(--main-color) solid;
    margin-top: 0.4rem;
    max-height: 32vh;
  }
  ul {
    max-width: 90vw;
    padding-top: 0.3rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  li {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  p {
    max-width: 90vw;
    padding-top: 0.5rem;
    text-align: center;
  }

  .title {
    max-width: 90vw;
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

  .rules {
    display: flex;
    flex-direction: column;
    padding: 0.7rem;
    border-radius: 0 0 10px 10px;
    background-color: var(--white-opacity);
    font-family: var(--font-family);
    font-size: 1rem;
  }

  @media screen and (min-width: 700px) {
    max-width: 100vw;

    div {
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }
    img {
      border-radius: 0 0 10px 0;
      border: none;
      margin-top: 0;
      max-height: 100%;
    }
    ul {
      padding-top: 4rem;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
    p {
      padding-top: 2.5rem;
      padding-left: 2.5rem;
    }

    .title {
      font-size: 2rem;
      height: 9vh;
      padding-left: 2vw;
    }
    .rules {
      font-size: 1.7rem;
      border-radius: 0 0 0 10px;
    }
  }
`;
