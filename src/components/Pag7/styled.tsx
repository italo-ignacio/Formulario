import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    font-size: 1.5rem;
  }
  input {
    min-width: 70%;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
