import styled from "styled-components";

export default styled.div`
  @media screen and (min-width: 700px) {
    box-sizing: border-box;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    p {
      color: var(--white-color);
      font-weight: bolder;
      font-family: var(--font-family);
      font-size: larger;
      padding-right: 1vw;
    }
  }
`;
