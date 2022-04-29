import styled from "styled-components";

export default styled.footer`
  display: none;

  @media screen and (min-width: 700px) {
    height: 11vh;
    width: 100%;
    display: block;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    background-color: var(--main-color);
    padding-inline: 2vw;

    div.footer {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
