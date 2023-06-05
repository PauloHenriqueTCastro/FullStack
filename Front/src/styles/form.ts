import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  gap: 20px;
  border: 30px solid var(--White);
  background-color: var(--White);
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
  label {
    font-size: 15px;
    font-weight: 600;
  }
  input {
    width: 90%;
    height: 20px;
    border-radius: 4px;
    border: solid 2px var(--Inputs-Colors);
  }
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
  @media (min-width: 800px) {
    width: 520px;
  }
`;
