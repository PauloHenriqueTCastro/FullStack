import styled from "styled-components";

export const MainConteiner = styled.main`
  width: 100%;
  gap: 100px;
  min-height: max-content;
  background-color: var(--Main-Color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  & > div {
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: max-content;
    width: 100%;

    & > ul {
      border-radius: 4px;
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      background-color: var(--White);
      border: 30px solid var(--White);
      & > p {
        font-size: 20px;
        font-weight: 600;
      }
      & > li {
        border-radius: 4px;
        border: solid 2px gray;
        padding: 10px;
        width: 95%;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
    }
    @media (min-width: 800px) {
      width: 90%;
      flex-direction: row;
      align-items: flex-start;
    }
  }
`;
