import styled from "styled-components";

export default styled.div`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 27vh;
    width: 44vh;
    margin-bottom: 4vh;
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
  h4 {
    color: var(--white-color);
    width: 95%;
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
