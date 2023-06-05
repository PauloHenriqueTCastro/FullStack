import styled from "styled-components";

export const HeaderConteiner = styled.header`
  width: 100%;
  height: 100px;
  background-color: var(--White);
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: var(--Black);
      font-size: 20px;
      font-weight: 600;
    }
    & > div {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      button {
        background-color: var(--Buttons-Colors);
        border: solid 1px;
        color: var(--White);
        height: 30px;
        border-radius: 8px;
        :hover {
          transition: 0.8s;
          background-color: var(--White);
          color: var(--Black);
          border: solid 1px black;
        }
      }
    }
  }
`;
