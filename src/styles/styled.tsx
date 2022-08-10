import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  padding: 1rem 12rem;
  justify-content: space-between;

  @media (max-width: 900px) {
    padding: 1rem 2rem;
  }
`;

export const Inputs = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  label {
    font-size: 1.5rem;
  }
  input {
    min-width: 80%;
  }
`;
