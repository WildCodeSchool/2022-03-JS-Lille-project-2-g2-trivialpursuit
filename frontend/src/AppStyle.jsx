import styled from "styled-components";

export default styled.div`
  main {
    height: 72vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 700px) {
    main {
    height: 70vh;
  }
`;
