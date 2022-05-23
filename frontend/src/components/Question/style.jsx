import styled from "styled-components";

export default styled.div`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 27vh;
    width: 44vh;
  }
  #category {
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 6vh;
    background-color: var(--main-color);
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  img {
    height: 70%;
    aspect-ratio: 1/1;
    margin-left: 2%;
    background-repeat: none;
  }
  .none {
    display: none;
  }
  h4 {
    font-family: var(--font-family);
    font-size: 1.5rem;
    text-align: left;
    color: var(--white-color);
    width: 95%;
    padding-left: 1vw;
  }
  @media screen and (min-width: 700px) {
    h4 {
      font-size: 1.2rem;
      padding-left: 0.4vw;
    }
  }
  .question {
    border-radius: 0 0 5px 5px;
    width: 100%;
    height: 21vh;
    background-color: var(--white-color);
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  h6 {
    width: 95%;
    text-align: center;
    vertical-align: center;
  }
`;
