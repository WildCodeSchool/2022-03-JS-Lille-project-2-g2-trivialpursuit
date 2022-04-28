import styled from "styled-components";

export default styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    text-align: center;
    margin-bottom: 8vh;
    font-family: var(--font-family-baseline);
    font-weight: bold;
  }
  div {
    width: 40vh;
  }
`;
