import styled from "styled-components";

export const StyledForm = styled.form`
  width: 800px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: var(--color-white);
  border-radius: 4px;

  > .div__buttons {
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 200px;
    font-size: 14px;
    line-height: 18px;
    padding: 10px 22px;
    margin: 0 24px;
    background-color: var(--color-secondary);
    border: 2px solid var(--color-primary);
    box-shadow: 0px 8px 12px var(--color-shadow);
    border-radius: 117px;
    font-weight: 700;
    color: var(--color-terciary);
  }

  button:hover {
    background-color: var(--color-primary);
    border: 2px solid var(--color-secondary);
  }

  button:disabled {
    background-color: var(--grey-90);
    color: var(--grey-70);
    border: 2px solid var(--grey-90);
  }

  input {
    width: 100%;
    padding: 20px;
  }

  table {
    padding: 20px;
    width: 100%;
  }

  thead,
  tbody {
    border: 2px solid red;
  }

  tr {
    display: flex;
  }

  th,
  td {
    width: 20%;
    border-bottom: 2px solid var(--color-primary);
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  th:last-child,
  td:last-child {
    width: 40%;
  }

  li {
    padding: 8px 0;
  }
`;
