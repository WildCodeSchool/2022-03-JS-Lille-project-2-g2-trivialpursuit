import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-family: var(--font-family);
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--main-color);
    text-align: center;
  }
  img {
    height: 13vh;
  }

  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: column;
    p {
      font-size: 2rem;
    }
    img {
      height: 20vh;
    }
  }
`;