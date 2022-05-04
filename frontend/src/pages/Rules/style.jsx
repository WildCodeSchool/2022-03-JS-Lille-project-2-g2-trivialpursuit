// style for page Rules
import styled from "styled-components";

export default styled.section`
  div {
    display: flex;
    align-items: stretch;
  }
  img {
    border-radius: 0 0 10px 0;
  }
  ul {
    padding-top: 4rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  li {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  p {
    padding-top: 2.5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  .title {
    border-radius: 10px 10px 0 0;
    background-color: var(--main-color);
    color: var(--white-color);
    font-family: var(--font-family);
    font-size: 2rem;
    height: 9vh;
    display: flex;
    align-items: center;
    padding-left: 2vw;
  }
  .rules {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: var(--white-opacity);
    font-family: var(--font-family);
    font-size: 1.7rem;
    border-radius: 0 0 0 10px;
  }
`;
